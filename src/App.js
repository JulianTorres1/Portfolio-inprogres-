import './App.css';

// componets

import Navbar from './componets/NavBar';
import Hero from './componets/Hero';
import Footer from './componets/footer';
import ProjectGrid from './componets/ProjectGrid';
import UserCard from './componets/UserCard';
import Specs from './componets/specs';

function App() {
  return (

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

        <box><Footer/></box>

      </box>

  );
}

export default App;
