import { Outlet } from "react-router-dom";
import Navigation from "./navigation";
import Landing from "./landing";

function RootLayout() {
  return (
    <div>
      <Navigation />
      <Landing />
      <Outlet />
    </div>
  );
}

export default RootLayout;
