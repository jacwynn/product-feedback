import styles from './Header.module.scss';
import AddFeedbackBtn from '../AddFeedbackBtn';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <div>
                    <img src="/images/bulb.png" />
                    <h3>0 Suggestions</h3>
                </div>
                <div className={styles.headerSelect}>
                    <label>Sort By :</label>
                    <select>
                        <option>Most Upvotes</option>
                        <option>Least Upvotes</option>
                        <option>Most Comments</option>
                        <option>Least Comments</option>
                    </select>
                </div>
            </div>
            <AddFeedbackBtn />
        </header>
    )
}

export default Header