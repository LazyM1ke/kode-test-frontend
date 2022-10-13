import "./Modal.scss"

function Modal({active, children}) {

    return (
        <div className={active ? "modal active" : "modal"}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;