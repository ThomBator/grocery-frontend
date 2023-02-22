import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import GroceryList from "./pages/GroceryList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<GroceryList />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
