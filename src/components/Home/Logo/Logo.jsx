import style from './Logo.module.scss'
import circular from "../../../assets/icons/fabiani-circular.svg";


const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <img src={circular} alt="logo" className={style.circularText} />
      <span className={style.name}>daniel</span>
    </div>
  )
}

export default Logo
