import styles from './AddFeedbackModal.module.scss';

const AddFeedbackModal = ({ show }) => {
    return (
        <section className={show ? styles.addFeedbackModal : styles.hideFeedbackModal}>
            <div>
                <p>Go Back</p>
                <div className={styles.modalContainer}>
                    <form>
                        <h5>Create New Feedback</h5>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddFeedbackModal;