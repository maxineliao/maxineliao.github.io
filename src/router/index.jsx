import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "@/pages/About";
import RootLayout from "./RootLayout";
import SlamAccess from "@/pages/Projects/SlamAccess";
import Pulse from "@/pages/Projects/Pulse";

const router = createHashRouter([
    {
        element: <RootLayout />,
        children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: '/projects',
            children: [
            // {
            //     index: true,
            //     element: <ProjectsIndex />, 
            // },
            {
                path: 'slam-access',
                element: <SlamAccess />, 
            },
            {
                path: 'pulse',
                element: <Pulse />, 
            },
            ],
        }
        ],
    },
])

export default router;