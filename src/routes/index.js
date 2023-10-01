import { Navigate } from "react-router-dom";
import PrivateRouters from "../components/PrivateRoutes";
import LayoutDefault from "../components/layouts/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Topic from "../pages/Topic";
import Quiz from "../pages/Quiz";
import Answers from "../pages/Answers";
import Result from "../pages/Result";

export const routes = [
   {
      path: '/',
      element: <LayoutDefault />,
      children: [
         { index: true, element: <Home /> },
         { path: 'login', element: <Login /> },
         { path: 'register', element: <Register /> },
         { path: '*', element: <Navigate to='/' /> },
         {
            element: <PrivateRouters />,
            children: [
               {path: 'topic', element: <Topic />},
               {path: 'quiz/:id', element: <Quiz />},
               {path: 'answers', element: <Answers />},
               {path: 'result/:id', element: <Result />},
            ]
         }
      ]
   }
]