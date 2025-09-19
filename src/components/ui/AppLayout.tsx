import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  [background-color:var(--color-cream)]">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
