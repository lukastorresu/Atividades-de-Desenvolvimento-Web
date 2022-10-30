
import { FaCalendarDay, FaCalendarAlt, FaCalendarTimes, FaCalendarCheck } from "react-icons/fa";
import {Link} from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return <ul>
        <li>
            <Link to={"/atrasadas"}>
            <FaCalendarTimes className="icons">
            </FaCalendarTimes>
                <p>Atrasadas</p>
            </Link>

        </li>
        <li>
            <Link to={"/hoje"}>
            <FaCalendarDay className="icons">
            </FaCalendarDay>
                <p>Hoje</p>
            </Link>

        </li>
        <li>
            <Link to={"/futuras"}>
            <FaCalendarAlt className="icons">
            </FaCalendarAlt>
                <p>Futuras</p>
            </Link>

        </li>
        <li>
            <Link to={"/executadas"}>
            <FaCalendarCheck className="icons">
            </FaCalendarCheck>
                <p>Executadas</p>
            </Link>

        </li>
    </ul>
}

export default Navbar;
