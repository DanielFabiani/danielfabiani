import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/layout/layout'


function App() {

  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Layout/>}/>
      </Routes>
    </div>
  )
}

export default App
