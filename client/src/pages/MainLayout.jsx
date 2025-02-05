import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { CustomFetch } from "../utils";

const url = '/user/current-user';

export const loader = async () => {
  try {
    const response = await CustomFetch.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error.response?.data || error.message);
    return null;
  }
};

const MainLayout = () => {
  return (
    <main className="h-dvh">
      <Navbar />
      <section className="vertical-center">
        <Outlet />
      </section>
      {/* <Footer /> */}
    </main>
  );
}
export default MainLayout;