import { Outlet } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "../components";

const MainLayout = () => {
  return (
    <main className="h-dvh">
      <ScrollToTop />
      <Navbar />
      <section className="vertical-center py-5">
        <Outlet />
      </section>
      {/* <Footer /> */}
    </main>
  );
}
export default MainLayout;