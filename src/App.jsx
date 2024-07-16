import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesHomePage from "../src/pages/GamesHomePage/GamesHomePage.jsx";
import CareersPage from "./pages/CareersPage/CareersPage.jsx";
import TeamPage from "./pages/TeamPage/TeamPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>\

        <Routes>
          <Route path="/" element={<GamesHomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          
          <Route path="/careers/:id" element={<JobDetailsPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
