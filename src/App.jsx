import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Store from "./pages/store/Store";
import ShoppingCartProvider from "./context/ShoppingCartContext";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={route}></RouterProvider>
    </ShoppingCartProvider>
  );
}

export default App;
