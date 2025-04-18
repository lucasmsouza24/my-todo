import styles from './index.module.css'
import Card from '../Card';

export default function CardContainer({containerTitle}) {

    return (
        <div className={styles.container}>
            <h2>{containerTitle}</h2>

            <div className={styles.cardList}>
                <Card cardTitle='Lavar a Louça'/>
                <Card cardTitle='Lição de casa'/>
                <Card cardTitle='Exercício'/>
            </div>
        </div>
    );
}
