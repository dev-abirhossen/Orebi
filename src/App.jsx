import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomeIndex from "./pages/homePage/HomeIndex";
import ShopIndex from "./pages/shopPage/ShopIndex";
import ErrorIndex from "./components/common/ErrorIndex";
import AboutIndex from "./pages/aboutPage/AboutIndex";
import LoginIndex from "./pages/loginPage/LoginIndex";

const routes = createRoutesFromElements(
  <Route>
    <Route element={<RootLayout />}>
      <Route index element={<HomeIndex/>} />
      <Route path="/shop" element={<ShopIndex/>} />
      <Route path="/about" element={<AboutIndex/>} />
      <Route path="/login" element={<LoginIndex/>}/>
    </Route>
    <Route path='*' element={<ErrorIndex/>} />
  </Route>

);

const router = createBrowserRouter(routes);


function App() {


  return <RouterProvider router={router} />;
}

export default App
