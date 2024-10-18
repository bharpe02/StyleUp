import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import OpeningPage from "./pages/OpeningPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element= {<OpeningPage />} />
          <Route path="HomePage" element= {<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
