import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/shares/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', loader: async () => {
                    return fetch('hotel.json')
                }, element: <Home></Home>
            }
        ]
    }
])