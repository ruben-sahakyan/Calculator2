import './App.scss'
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import { DataProvider } from './components/UseContext'

function App() {
  return (
    <>
    <DataProvider>
      <h1>LOGO</h1>
      <Header />
      <Body />
    </DataProvider>
    </>
  )
}

export default App
