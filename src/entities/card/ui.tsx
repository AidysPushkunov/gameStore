import styles from './styles.module.css'

type cardType = {
    image: string;
    title: string;
    price: string;
}

const Card: React.FC<cardType> = ({image, title, price}) => {
    return (
        <div className={styles.card}>
            <div className={styles.image_wrap}>
                <img className={styles.image} src={image} alt='image'/>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>${price}</div>
            <div className={styles.add_to_cart}>Add to Cart</div>
        </div>
    )
}

export { Card }