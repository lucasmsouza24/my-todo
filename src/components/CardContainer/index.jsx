import styles from './index.module.css'

export default function CardContainer({containerTitle}) {

    return (
        <div className={styles.container}>
            <h2>{containerTitle}</h2>

            <div className={styles.cardList}></div>
        </div>
    );
}
