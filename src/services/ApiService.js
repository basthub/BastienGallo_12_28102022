import axios from 'axios'

const apiUrl = `${process.env.REACT_APP_API_URL}`

/**
 * 
 * @param {Number} id - User id 
 * @returns {Promise} Return user datas
 */

export const getUserMainData = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${id}`)
    console.log('je passe là')
    return response.data.data
  } catch (error) {
    console.log(error)
  }
}

export const getUserActivity = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${id}/activity`)
    return response.data.data
  } catch (error) {
    throw new Error({ message: error })
  }
}

export const getUserAverageSessions = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${id}/average-sessions`)
    return response.data.data
  } catch (error) {
    throw new Error({ message: error })
  }
}

export const getUserPerformance = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${id}/performance`)
    return response.data.data
  } catch (error) {
    throw new Error({ message: error })
  }
}
