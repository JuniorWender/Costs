import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Company">Company</Link>
        <Link to="/NewProject">New Project</Link>
      </ul>
      <Container customClass="min-heigth">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Company" element={<Company/>}/>
          <Route path="/NewProject" element={<NewProject/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
