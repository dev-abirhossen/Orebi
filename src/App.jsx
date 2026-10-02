import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomeIndex from "./pages/homePage/HomeIndex";
import ShopIndex from "./pages/shopPage/ShopIndex";
import ErrorIndex from "./components/common/ErrorIndex";
import AboutIndex from "./pages/aboutPage/AboutIndex";
import LoginIndex from "./pages/loginPage/LoginIndex";
import DashboardIndex from "./pages/dashboardPage/DashboardIndex";
import DashboardLayout from "./components/layout/DashboardLayout";
import ProfileIndex from "./pages/profilePage/ProfileIndex";
import DownloadIndex from "./pages/downloadPage/DownloadIndex";
import OthersIndex from "./pages/othersPage/OthersIndex";
import AddressIndex from "./pages/addressPage/AddressIndex";
import AccountDetailsIndex from "./pages/accountDetailsPage/AccountDetailsIndex";

const routes = createRoutesFromElements(
  <Route>
    <Route element={<RootLayout />}>
      <Route index element={<HomeIndex />} />
      <Route path="/shop" element={<ShopIndex />} />
      <Route path="/about" element={<AboutIndex />} />
      <Route path="/login" element={<LoginIndex />} />
      <Route element={<DashboardLayout />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<DashboardIndex/>}/>
        <Route path="/profile" element={<ProfileIndex/>} />
        <Route path="/download" element={<DownloadIndex/>}/>
        <Route path="/others" element={<OthersIndex/>}/>
        <Route path="/addresses" element={<AddressIndex/>}/>
        <Route path="/account-details" element={<AccountDetailsIndex/>}/>
      </Route>
    </Route>
    <Route path="*" element={<ErrorIndex />} />
  </Route>,
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
