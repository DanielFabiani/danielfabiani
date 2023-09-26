import { Routes, Route } from 'react-router-dom';
import './App.scss';
import 'atropos/css';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Works from './components/Woks/Works'
import WorkDetail from './components/WorkDetail/WorkDetail'
import Skills from './components/Skills/Skills';



function App() {

  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/works' element={<Works />} />
          <Route path='/WorkDetail/:index' element={<WorkDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
