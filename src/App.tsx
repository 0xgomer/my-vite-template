import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <div className={'App'}>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    );
};

export default App;