import AboutMe from "./components/aboutMe/AboutMe";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/skills/Skills";

function App() {

  return (
    <div className="h-screen bg-PrimaryColor pl-10">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/about" Component={AboutMe} />
        <Route path="/skills" Component={Skills} />
        <Route path="/works"></Route>
        <Route path="/journey"></Route>
        <Route path="/contact"></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App