import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
