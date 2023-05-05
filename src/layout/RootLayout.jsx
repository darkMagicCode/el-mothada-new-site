import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <div className="flex-column">
        <div className=" col-12">
          <Navbar />
        </div>
        <main className=" col-12">
          <Outlet />
        </main>
        <div className=" col-12">
          <Footer />
        </div>
      </div>

      
    </>
  );
}

export default RootLayout;
