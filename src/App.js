import './App.scss'
import AppRouter from './router/router'
import Header from './components/Header/Header'
import Sidenav from './components/Sidenav/Sidenav'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidenav />
        <AppRouter />
      </main>
    </div>
  )
}

export default App
