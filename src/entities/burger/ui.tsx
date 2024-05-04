import styles from './styles.module.css'


const Burger: React.FC = () => {
    return (
        <div className={styles.burger}>
          <div className={styles.top}></div>
          <div className={styles.middle}></div>
          <div className={styles.bottom}></div>
        </div>
    )
}

export { Burger }