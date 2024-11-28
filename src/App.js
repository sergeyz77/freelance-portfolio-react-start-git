import "./styles/main.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";

import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";




function App() {
  return (


    <div className="App">
			<Router>
				
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>

        <Project />
				<Footer />


			</Router>


		</div>




  );
}

export default App;
