import styles from './styles.module.css';
import profileIco from 'shared/assets/images/profile.svg';


export default function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.user_info}>
                <img className={styles.user_image} src={profileIco} alt="profile_icon" />
                <div>
                    <h1>Username</h1>
                    <p>
                        Description
                    </p>
                    <div className={styles.orders}>Orders</div>
                </div>
            </div>        
        </div>

    )
}