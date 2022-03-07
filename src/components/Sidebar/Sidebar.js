import styles from './Sidebar.module.scss';

import backgroundImage from '../../../public/images/background-header.png';

const Sidebar = () => {
    return (
    <aside className={styles.sidebar}>
        <div style={{backgroundImage: `url(${backgroundImage.src})`}} className={styles.sidebarBlock}>
            <div>
            <h2>Wynn Solutions</h2>
            <p className="secondary-body-copy">Feedback Board</p>
            </div>
        </div>
        <div className={styles.sidebarBlock}>
            <ul>
            <li>All</li>
            <li>UI</li>
            <li>UX</li>
            <li>Enhancement</li>
            <li>Bug</li>
            <li>Feature</li>
            </ul>
        </div>
        <div className={styles.sidebarBlock}>
            <div className={styles.sidebarHeading}>
            <h3>Roadmap</h3>
            <a href="#">View</a>
            </div>
            <ul>
            <li>
                <div>Planned</div>
                <div>2</div>
            </li>
            <li>
                <div>In-Progress</div>
                <div>3</div>
            </li>
            <li>
                <div>Live</div>
                <div>5</div>
            </li>
            </ul>
        </div>
    </aside>
    )
}

export default Sidebar;