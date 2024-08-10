import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DevTools from "./pages/DevTools";
import ToolDetails from "./pages/ToolDetails";
import Layout from "./layouts/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />{" "}
          </Layout>
        }
      />
      <Route
        path="/tools"
        element={
          <Layout>
            <DevTools />{" "}
          </Layout>
        }
      />
      <Route
        path="/tools/:id"
        element={
          <Layout>
            <ToolDetails />{" "}
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
