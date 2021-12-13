
const Modal = ({ handleClose, showAnswer, children }) => {
    const showHideClassName = showAnswer ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button className='closeButton' type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};


export default Modal;