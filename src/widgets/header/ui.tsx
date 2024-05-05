import styles from './styles.module.css';

import notificationIco from 'shared/assets/images/notification.svg';
import basketIco from 'shared/assets/images/basket.svg';
import avatarIco from 'shared/assets/images/profile.svg';
import { Burger } from 'entities/burger';
import { SearchGames } from 'features/searchGame';


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.burger}>
                <Burger />
            </div>
            <div className={styles.search_element}>
                <SearchGames />
            </div>

            <div className={styles.elements}>
                <img className={styles.image} src={notificationIco} alt='notification' />
                <img className={styles.image} src={basketIco} alt='basket' />
                <img className={styles.avatar} src={avatarIco} alt='avatar' />
            </div>
        </header>
    )
}

export { Header }