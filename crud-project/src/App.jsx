import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./comoponentes/home/Home";
import Root from "./comoponentes/root/Root";
import Add from "./comoponentes/add/Add";
import Edite from "./comoponentes/edite/Edite";


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="add" element={<Add />} />
      <Route path="edite/:id" element={<Edite />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
