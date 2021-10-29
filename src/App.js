
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import SkillPage from './Pages/skillPage';
import ContactPage from './Pages/ContactPage';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Switch as Switching } from "react-router";
import { IconButton } from "@material-ui/core";
import ProjectPage from "./Pages/ProjectPage";


function App() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="App">
        <Sidebar navToggle={navToggle} />
        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>

        <MainContentStyled>
          <Switching>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/skills" exact>
              <SkillPage />
            </Route>
          <Route path="/projects" exact>
          <ProjectPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switching>

        </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }

`;

export default App;
