import { useState } from 'react';
import styles from './index.module.css'

export default function Card({cardTitle = "Title"}) {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [cardTitleState, setCardTitleState] = useState(cardTitle);

    const handleDoubleClick = () => {
        setIsEditingTitle(true);
    }

    const handleBlur = () => {
        setIsEditingTitle(false);
    }

    const handleChange = (e) => {
        setCardTitleState(e.target.value);
    }

    return (
        <div className={styles.card}>
            {isEditingTitle ? (
                <input
                    type='text'
                    value={cardTitleState}
                    autoFocus
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setIsEditingTitle(false);
                        }
                    }}
                />
            ) : (
                <span onDoubleClick={handleDoubleClick}>
                    {cardTitleState}
                </span>
            )}
        </div>
    );
}
