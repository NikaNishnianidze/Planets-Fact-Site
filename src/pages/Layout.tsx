import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";

const navigationLinks: string[] = [
  "/Mercury",
  "/Venus",
  "/Earth",
  "/Mars",
  "/Jupiter",
  "/Saturn",
  "/Uranus",
  "/Neptune",
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (navigationLinks.includes(pathname)) {
      navigate(pathname);
    } else {
      navigate("/Mercury");
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
