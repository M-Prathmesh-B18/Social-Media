import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>

          {/* <PostList></PostList>
          
            <CreatePost></CreatePost> */}
          <Outlet />

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
