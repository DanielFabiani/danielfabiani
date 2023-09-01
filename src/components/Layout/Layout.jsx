import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './index.scss'

function Layout() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>

        <Outlet />

        
      </div> 
    </div>
  )
}

export default Layout