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
    if (response.status === 200) {
      return response.data.data
    } else {
      throw new Error('Something went wrong')
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw error
    } else if (error.request) {
      throw error
    } else {
      console.log(error.message)
    }
    throw error
  }
}

export const getUserActivity = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${id}/activity`)
    if (response.status === 200) {
      return response.data.data
    } else {
      throw new Error('Something went wrong')
    }
  } catch (error) {
    throw new Error({ message: error })
  }
}

export const getUserAverageSessions = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${id}/average-sessions`)
    if (response.status === 200) {
      return response.data.data
    } else {
      throw new Error('Something went wrong')
    }
  } catch (error) {
    throw new Error({ message: error })
  }
}

export const getUserPerformance = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${id}/performance`)
    if (response.status === 200) {
      return response.data.data
    } else {
      throw new Error('Something went wrong')
    }
  } catch (error) {
    throw new Error({ message: error })
  }
}
