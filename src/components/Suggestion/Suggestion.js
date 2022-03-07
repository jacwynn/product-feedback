import styles from './Suggestion.module.scss';

const Suggestion = () => {
    return (
        <>
            <div className="suggestions__block">
                <div className="suggestions__content-container">
                    <div className="suggestions__upvotes">
                        <button>150</button>
                    </div>
                    <div className="">
                        <h3 className='suggestions__title'>Add tags for solutions</h3>
                        <p className='suggestions__description'>Easier to search for solutions based on specific tasks</p>
                        <div className='suggestions__category'>
                            <button>Enhancement</button>
                        </div>
                    </div>
                </div>
                <div className="suggestions__comments">
                    <span>5</span>
                </div>
            </div>   
        </>
    )
}

export default Suggestion;


// TODO: add module styles to this component and remove from global.scss file