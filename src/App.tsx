import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import { Suspense, lazy } from "react";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
import Loader from "./components/Loader";
// The lazy loading technique helps to load components only when they are needed, allowing for asynchronous loading.Its a function

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            <Route path="/admin/products" element={<Products />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
