import AboutPage from "./pages/AboutPage"
import Awards from "./pages/Awards.jsx";
import ChatBot from "./pages/ChatBot";
import Dashboard from "./pages/Dashboard";
import DataModel from "./pages/DataModel";
import ExperiencePage from "./pages/ExperiencePage"
import HomePage from "./pages/HomePage"
import Portfolio from "./pages/Portfolio"
import { Routes, Route } from "react-router-dom";       

function App() {
  return (
    <div className="relative z-10"> {/* Add z-index to ensure proper stacking */}
      <Routes>
        <Route path="/" element={
          <>
            <HomePage/>
            <ExperiencePage/>
            <AboutPage/>
            <Portfolio/>
          </>
        } />
        
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/chatbot" element={<ChatBot/>} />
        <Route path="/data-model" element={<DataModel/>} />
        <Route path="/awards" element={<Awards/>} />
      </Routes>
    </div>
  )
}

export default App;