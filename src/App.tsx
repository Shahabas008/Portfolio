import AboutMe from "./components/aboutMe/AboutMe";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import ContactMe from "./components/contactme/ContactMe";

function App() {

  return (
    <div className="h-screen bg-PrimaryColor pl-10">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" Component={AboutMe} />
        <Route path="/skills" Component={Skills} />
        <Route path="/works" Component={Works}></Route>
        {/* <Route path="/journey"></Route> */}
        <Route path="/contact" Component={ContactMe}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App