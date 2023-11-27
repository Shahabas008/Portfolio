import AboutMe from "./components/aboutMe/AboutMe";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="h-screen bg-PrimaryColor pl-10">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/about" Component={AboutMe} />
        <Route path="/skills"></Route>
        <Route path="/works"></Route>
        <Route path="/journey"></Route>
        <Route path="/contact"></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App