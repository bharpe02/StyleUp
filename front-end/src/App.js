import { BrowserRouter, Routes, Route } from "react-router-dom";
import OpeningPage from "./pages/OpeningPage";
import MyRoomsPage from "./pages/MyRoomsPage"
import AddRoomPage from "./pages/AddRoomPage"
import WishlistPage from "./pages/WishlistPage"
import SurveyPage from "./pages/SurveyPage"
import Layout from './components/Layout';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyAccountPage from "./pages/MyAccountPage"
import RoomPage from "./pages/RoomPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<OpeningPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="MyRooms" element={<MyRoomsPage />} />
          <Route path="AddRoom" element={<AddRoomPage />} />
          <Route path="Wishlist" element={<WishlistPage />} />
          <Route path="MyAccount" element={<MyAccountPage/>} />
          <Route path="Room" element={<RoomPage/>} />
        </Route>
        <Route path="Survey" element={<SurveyPage />} />
        <Route path="Results" element={<ResultsPage />} />
        <Route path="Login" element={<LoginPage/>} />
        <Route path="Signup" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
