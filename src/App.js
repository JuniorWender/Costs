import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import OtherProjects from './components/pages/OtherProjects'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'
import Projects from './components/pages/Projects'
import MailSend from './components/shared/MailSend'

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
          <Route path="/OtherProjects" element={<OtherProjects/>}/>
          <Route path="/NewProject" element={<NewProject/>}/>
          <Route path="/project/:id" element={<Project/>}/>
          <Route path="/MailSend" element={<MailSend/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
