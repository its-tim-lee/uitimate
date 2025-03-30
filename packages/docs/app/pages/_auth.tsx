import { Outlet } from "react-router";

export default function Auth() {
  return <div>
    <h1>This is the layout of "/auth/*" routes; you can't visit /auth directly,
      cuz what it does is simply provide a layout without affecting the URL path.</h1>
    <Outlet />
  </div>;
}
