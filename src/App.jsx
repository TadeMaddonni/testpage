import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import "./styles/global.scss";
import Topbar from "./components/common/Topbar";
import Footer from "./components/common/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Topbar />
                <Routes>
                    <Route path="/" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
