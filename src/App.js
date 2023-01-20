import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-heigth">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Company" element={<Company/>}/>
          <Route path="/NewProject" element={<NewProject/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
