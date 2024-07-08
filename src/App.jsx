import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesHomePage from "../src/pages/GamesHomePage/GamesHomePage.jsx";
// import WarehouseListPage from "../src/pages/WarehouseListPage/WarehouseListPage.jsx";
// import WarehouseDetailsPage from "../src/pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
// import WarehouseFormPage from "../src/pages/WarehouseFormPage/WarehouseFormPage.jsx";
// import InventoryPage from "../src/pages/InventoryPage/InventoryPage.jsx";
// import ItemDetailsPage from "../src/pages/ItemDetailsPage/ItemDetailsPage.jsx";
import Header from "../src/components/Header/Header.jsx";
// import Footer from "../src/components/Footer/Footer.jsx";
// import EditWarehouse from "./pages/EditWarehouse/EditWarehouse.jsx";
// import AddInventoryPage from "../src/pages/AddInventoryPage/AddInventoryPage.jsx";
import "./App.scss";
// import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<GamesHomePage />} />
          {/* <Route path="/warehouses" element={<WarehouseListPage />} />
          <Route
            path="/warehouses/:warehouseId"
            element={<WarehouseDetailsPage />}
          />
          <Route
            path="/warehouses/:warehouseId/edit"
            element={<EditWarehouse />}
          />
          <Route path="/warehouses/new" element={<WarehouseFormPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:itemId" element={<ItemDetailsPage />} />
          <Route path="/inventory/:itemId/edit" element={<EditInventoryPage />} />
          <Route path="/inventory/new" element={<AddInventoryPage />} /> */}
        </Routes>

          {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
