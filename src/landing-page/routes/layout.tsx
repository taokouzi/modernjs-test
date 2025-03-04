import { Outlet } from "@modern-js/runtime/router";
import "../../polyfill";

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
