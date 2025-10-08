import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import DiscoveryPage from "./containers/DiscoveryPage";
import InventoryPage from "./containers/InventoryPage";
import SettingsPage from "./containers/SettingsPage";

function App() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", gap: "16px"}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<DiscoveryPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Box>
  );
}

export default App;
