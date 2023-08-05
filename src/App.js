import './App.css';
import {Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import SignInPage from "./pages/SignInPage/SignInPage";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/sign-in' element={<SignInPage/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
