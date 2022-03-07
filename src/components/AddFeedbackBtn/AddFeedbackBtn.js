import { useState } from "react";
import AddFeedbackModal from "../AddFeedbackModal/AddFeedbackModal";

const AddFeedbackBtn = () => {

    //add state to determine when to open and close modal
    const [isOpen, setIsOpen] = useState(false);
    
    const showModal = () => {
        setIsOpen(true);
    }

    return (
        <div>
            <AddFeedbackModal show={isOpen} />
            <button onClick={showModal}>+ Add Feedback</button>
        </div>
    )
}

export default AddFeedbackBtn;