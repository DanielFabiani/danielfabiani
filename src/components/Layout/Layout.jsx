import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import style from './Layout.module.scss'

function Layout() {
  return (
    <div className={style.layoutContainer}>
      <Sidebar />
      <div className={style.page}>

        <Outlet />

        
      </div> 
    </div>
  )
}

export default Layout