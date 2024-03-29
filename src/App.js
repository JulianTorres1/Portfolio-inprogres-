import './App.css';

// imports componets

import Navbar from './componets/NavBar';
import Hero from './componets/Hero';
import Footer from './componets/footer';
import ProjectGrid from './componets/ProjectGrid';
import Specs from './componets/specs';
import  ContactForm from './componets/ContactForm';
import { Box } from '@mui/material';
import UserCard from './componets/UserCard';
import RepoCard from './componets/RepoCard';

function App() {
  return (
    // Place all te components in the Single page app 
      <box>
        <box><Navbar/></box>
        <box><Hero/></box>
          <Box><UserCard/></Box>
          <box>
              <RepoCard username="JulianTorres1" />
              <ProjectGrid/>
          </box>
          <box>
              <Specs/>
          </box>
          <box>
              <ContactForm/>
          </box>
        <box><Footer/></box>
      </box>
  );
}

export default App;
