import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import OpeningPage from "./pages/OpeningPage";
import MyRoomsPage from "./pages/MyRoomsPage"
import AddRoomPage from "./pages/AddRoomPage"
import WishlistPage from "./pages/WishlistPage"
import SurveyPage from "./pages/SurveyPage"
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element= {<OpeningPage />} />
          <Route path="HomePage" element= {<HomePage />}/>
          <Route path="MyRooms" element={<MyRoomsPage />} />
          <Route path="AddRoom" element={<AddRoomPage />} />
          <Route path="Wishlist" element={<WishlistPage />} />
          <Route path="Survey" element={<SurveyPage />} />
          <Route path="Login" element={<LoginPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
