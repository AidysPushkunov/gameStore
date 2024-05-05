import { Products } from 'widgets/products';
import styles from './styles.module.css';


export default function Product() {
    return (
        <div className={styles.products}>
            <h3 className={styles.title}>Games:</h3>
            <Products />
        </div>
    )
}