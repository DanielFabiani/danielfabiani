import Sidebar from '../Sidebar/Sidebar'
import style from './Layout.module.scss'

function Layout() {
  return (
    <div className={style.layout}>
      <Sidebar />
    </div>
  )
}

export default Layout