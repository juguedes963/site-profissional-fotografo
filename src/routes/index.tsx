import {
    createBrowserRouter,
    useRouteError
} from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";


export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        element: <Home />,
        errorElement: <ErrorPage />
    }, {
        path: "/details",
        Component: Details,
        element: <Details />,
        errorElement: <ErrorPage />
    }

]);



export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>

        </div>
    );
}