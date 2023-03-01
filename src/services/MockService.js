async function fetchData() {
  const result = await fetch(`/mockedData.json`)
  const data = await result.json()
  return data
}

export const getUserMainData = async () => {
  try {
    const data = await fetchData()
    return data.user
  } catch (error) {
    console.log(error)
  }
}

export const getUserActivity = async () => {
  try {
    const data = await fetchData()
    return data.activity
  } catch (error) {
    console.log(error)
  }
}

export const getUserAverageSessions = async () => {
  try {
    const data = await fetchData()
    return data.averagesessions
  } catch (error) {
    console.log(error)
  }
}

export const getUserPerformance = async () => {
  try {
    const data = await fetchData()
    return data.performance
  } catch (error) {
    console.log(error)
  }
}
