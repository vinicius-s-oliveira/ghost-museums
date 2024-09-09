import { Outlet } from "react-router-dom";

// import styles from "./styles.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
