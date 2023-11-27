import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="h-screen bg-PrimaryColor pl-10">
      <Header />
      <NavBar />
      <Routes>
        <Route path="about" ></Route>
        <Route path="skills"></Route>
        <Route path="works"></Route>
        <Route path="journey"></Route>
        <Route path="contact"></Route>
      </Routes>
    </div>
  )
}

export default App