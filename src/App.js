import "./App.css";
import HomePage from "./HomePage";
import Navbar from "./NavBar";
import FriendPage from "./FriendPage";
import NotFound from "./NotFound";
import ProfilePage from "./ProfilePage";
import Comments from "./Comments";
import Posts from "./Posts";
import Beans from "./Beans";
import OtherProfile from "./OtherProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Login and Register Page
import { Login } from "./Login";
import { Register } from "./Register";
import { UserContextProvider } from "./context/userContext";
function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route path="/friends" element={<FriendPage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              {/* <Route path="/Posts" element={<Posts />}></Route> */}
              <Route path="/Comments" element={<Comments />}></Route>
              <Route path="/Beans" element={<Beans />}></Route>
              <Route path="/profile/:username" element={<OtherProfile />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
