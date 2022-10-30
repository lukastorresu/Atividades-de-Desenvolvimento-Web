import Navbar from "./widgets/Navbar";
import Header from "./widgets/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return <Router>
        <Header>

        </Header>
        <div class="sidebar">
<Navbar> </Navbar>
        </div>
        <Routes>
            <Route path="/hoje"></Route>
            <Route path="/atrasadas"></Route>
            <Route path="/futuras"></Route>
            <Route path="/executadas"></Route>

        </Routes>
    </Router>
}

export default App;
