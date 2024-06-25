import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "../pages/error-page/error-page.tsx";
import MainPage from "../pages/main-page/MainPage.tsx"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index:true,
                element: <MainPage/>
            }
        ]
    }
])

export default router