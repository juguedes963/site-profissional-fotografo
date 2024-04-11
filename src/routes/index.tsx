import {
    createBrowserRouter,
    useRouteError
} from "react-router-dom";
import Home from "../pages/Home";


export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        element: <Home />,
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