import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Bitmap from "../components/Bitmap";
import Footer from "../components/Footer";
import CategoryPro from "../components/CategoryPro";
function RootLayout() {
  return (
    <div>
      <NavBar />
      <main className="grow">
        <Outlet />
        {/* <CategoryPro />
        <Bitmap /> */}
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
