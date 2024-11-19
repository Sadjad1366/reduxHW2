import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import { MainLayout } from "./layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider} from "react-redux";
import { reduxStore } from "./redux/store";
import Cart from "./pages/Cart";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "carts",
        element: <Cart />,
      },
      {
        path: "register",
        element: <Register />,

      },
    ],
  },
]);
const queryClient = new QueryClient();
function App() {

    return (

      <QueryClientProvider client={queryClient}>
        <Provider store={reduxStore}>
     <RouterProvider router={router}/>
     </Provider>
     </QueryClientProvider>
  )
}

export default App
