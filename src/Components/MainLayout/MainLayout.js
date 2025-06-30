import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
