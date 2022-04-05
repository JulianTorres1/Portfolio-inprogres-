import './App.css';

// imports componets

import Navbar from './componets/NavBar';
import Hero from './componets/Hero';
import Footer from './componets/footer';
import ProjectGrid from './componets/ProjectGrid';
import UserCard from './componets/UserCard';
import Specs from './componets/specs';
import  ContactForm from './componets/ContactForm';

function App() {
  return (
    // Place all te components in the Single page app 
      <box>
        <box><Navbar/></box>
        <box><Hero/></box>
        <box><UserCard/></box>
          <box>
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
