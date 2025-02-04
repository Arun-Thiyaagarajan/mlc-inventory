import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="h-dvh">
      <Outlet />
    </main>
  );
}
export default MainLayout;