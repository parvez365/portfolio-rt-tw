import Home from "./pages/Home";

import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router";
import Layout from "./root/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
