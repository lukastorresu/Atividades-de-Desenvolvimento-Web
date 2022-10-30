import "./Modal.css";
import SetTask from "../SetTask"

const Modal = ({show, setShow, task}) => {
    return <div style={{display: (Show)? "flex" : "none"}} className="modal">
        <SetTask
        show={show}
        setShow={setShow}
        task={task}
        ></SetTask>
    </div>

};

export default Modal;
