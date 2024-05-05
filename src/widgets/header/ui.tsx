import styles from './styles.module.css';

import notificationIco from 'shared/assets/images/notification.svg';
import basketIco from 'shared/assets/images/basket.svg';
import avatarIco from 'shared/assets/images/profile.svg';
import { Burger } from 'entities/burger';
import { SearchGames } from 'features/searchGame';
import { useLocation } from 'react-router-dom'


const Header: React.FC = () => {
    const location = useLocation();
    

    console.log(location.pathname);

    return (
        <header className={styles.header}>
            <div className={styles.burger}>
                <Burger />
            </div>
            {
                location.pathname === '/' ? ( <div className={styles.search_element}>
                    <SearchGames />
                </div>) : (<div></div>)
            }
      
            <div className={styles.elements}>
                <img className={styles.image} src={notificationIco} alt='notification' />
                <img className={styles.image} src={basketIco} alt='basket' />
                <img className={styles.avatar} src={avatarIco} alt='avatar' />
            </div>
        </header>
    )
}

export { Header }