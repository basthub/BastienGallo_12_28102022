import { useState, useEffect } from 'react'
import {
  getUserActivity,
  getUserMainData,
  getUserAverageSessions,
  getUserPerformance,
} from '../../services/ApiService.js'
import styles from './dashboard.module.scss'
import Cards from '../../components/Cards/Cards'
import GraphBarChart from '../../components/GraphBarChart/GraphBarChart'
import GraphLineChart from '../../components/GraphLineChart/GraphLineChart'
import GraphRadarChart from '../../components/GraphRadarChart/GraphRadarChart'
import GraphRadialBarChart from '../../components/GraphRadialBarChart/GraphRadialBarChart'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isUserData, setIsUserData] = useState(false)
  const [error, setError] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [getUserData, setGetUserData] = useState(null)
  const [getActivityData, setGetActivityData] = useState(null)
  const [getAverageSessionsData, setGetAverageSessionsData] = useState(null)
  const [getPerformanceData, setGetPerformanceData] = useState(null)
  const { userId } = useParams()

  useEffect(() => {
    if (userId) {
      Promise.all([
        getUserMainData(userId),
        getUserActivity(userId),
        getUserAverageSessions(userId),
        getUserPerformance(userId),
      ])
        .then(([userData, userActivity, userSessions, userPerformance]) => {
          setGetActivityData(userActivity)
          setGetAverageSessionsData(userSessions)
          setGetPerformanceData(userPerformance)
          setGetUserData(userData)
          setError(false)
          setIsUserData(true)
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            setError(true)
            setIsUserData(false)
          } else if (error.request) {
            setServerError(true)
            setIsUserData(false)
          } else {
            setServerError(true)
            setIsUserData(false)
          }
        })
    }
  }, [userId])

  useEffect(() => {
    setIsLoading(!(!error && isUserData))
  }, [isUserData, error])

  return (
    <div className={styles.dashboard}>
      {serverError ? (
        <p>
          {' '}
          Oops, une erreur est survenue. Nous ne pouvons pas accéder aux données
          pour le moment. Veuillez réessayer plus tard.
        </p>
      ) : error ? (
        <p>Désolé, l'utilisateur que vous avez demandé n'existe pas.</p>
      ) : isLoading ? (
        <p> Chargement...</p>
      ) : (
        <>
          <h1>
            Bonjour <span>{getUserData.userInfos.firstName}</span>
          </h1>
          <p className={styles.subtitle}>
            Félicitation ! Vous avez explosé vos objectifs hier &#128079;
          </p>
          <div className={styles.userInfos}>
            <div className={styles.graphContainer}>
              <div className={styles.mainchart}>
                <GraphBarChart data={getActivityData.sessions} />
              </div>
              <div className={styles.otherchart}>
                <GraphLineChart data={getAverageSessionsData.sessions} />
                <GraphRadarChart data={getPerformanceData} />
                <GraphRadialBarChart
                  data={getUserData.todayScore || getUserData.score}
                />
              </div>
            </div>
            <aside className={styles.nutritionData}>
              <Cards value={getUserData.keyData.calorieCount} type="calorie" />
              <Cards value={getUserData.keyData.proteinCount} type="protein" />
              <Cards
                value={getUserData.keyData.carbohydrateCount}
                type="carbohydrate"
              />
              <Cards value={getUserData.keyData.lipidCount} type="lipid" />
            </aside>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
