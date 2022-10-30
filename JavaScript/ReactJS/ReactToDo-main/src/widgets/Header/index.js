import { FaPlusCircle } from 'react-icons/fa';
import "./Header.css"

function Header(props) {

    return <header className='header'>
        <h2>To-do</h2>
        <FaPlusCircle size={35} style={{cursor: "pointer"}} onClick={() => props.setShow(true)}></FaPlusCircle>
    
    </header>
}
export default Header