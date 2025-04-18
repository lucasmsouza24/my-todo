import styles from './TodoPage.module.css'
import CardContainer from '../components/CardContainer';

export default function TodoPage() {
    return (
        <>
            <div className={styles.container}>
                <h1>MyTodo</h1>

                <div className={styles.contentContainer}>
                    <CardContainer />
                    <CardContainer />
                    <CardContainer />
                </div>
            </div>
        </>
    );
}
