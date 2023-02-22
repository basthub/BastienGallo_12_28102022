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
          console.log(error)
          setError(true)
          setIsUserData(false)
        })
    }
  }, [])

  useEffect(() => {
    setIsLoading(!(!error && isUserData))
  }, [isUserData, error])

  return (
    <div className={styles.dashboard}>
      {error ? (
        <p>Cet utilisateur n'existe pas</p>
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
