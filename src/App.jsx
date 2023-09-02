import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/layout/layout'
import Home from './components/Home/Home'
import About from './components/About/About'



function App() {

  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
