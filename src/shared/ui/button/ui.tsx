import styles from './styles.module.css'

type ButtonType = {
    children: string;
    icon: string;
}

const Button: React.FC<ButtonType> = ({icon, children}) => {
    return (
        <div className={styles.button}>
            <div className={styles.icon}>
                <img className={styles.image} src={icon} />
            </div>
            <div className={styles.text}>
                {children}
            </div>
        </div>
    )
}

export { Button }