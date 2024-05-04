import { Link } from 'react-router-dom'
import styles from './styles.module.css'


const Menu: React.FC = () => {
    return (
        <menu className={styles.menu}>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Product</Link>
            <Link to={'/profile'}>Profile</Link>

        </menu>
    )
}

export { Menu }