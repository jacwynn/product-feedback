import styles from './AddFeedbackModal.module.scss';

const AddFeedbackModal = ({ show }) => {
    return (
        <section className={show ? styles.addFeedbackModal : styles.hideFeedbackModal}>
            <h5>Add Feedback</h5>
        </section>
    )
}

export default AddFeedbackModal;