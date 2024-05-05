import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { Button } from 'shared/ui/button/ui'
import logo from 'shared/assets/images/logo.svg';
import  profileIcon  from 'shared/assets/images/profile.svg'
import  controllerIcon  from 'shared/assets/images/controller.svg'




const Menu: React.FC = () => {
    return (
        <menu className={styles.menu}>
            
            <img className={styles.logo} src={logo} alt="logo" />
            

            <Link className={styles.link} to={'/'}><Button icon={controllerIcon}>Games</Button></Link>
            <Link className={styles.link} to={'/profile'}><Button icon={profileIcon}>Profile</Button></Link>

        </menu>
    )
}

export { Menu }