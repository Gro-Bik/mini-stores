import styles from './AppCard.module.css'


export function AppCard({title, text, date, price, img}){
    return (
            <section className={styles.card}>
              <img src={img} alt={title} className={styles.productImage} />
              <h2>{title}</h2>
              <p>{text}</p>
              <span>{date}</span>
              <span>{price}</span>
            </section>
    )
}