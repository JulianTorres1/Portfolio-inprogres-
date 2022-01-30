import logo from './logo.svg';
import './App.css';

// componets

import Navbar from './componets/NavBar';
import Hero from './componets/Hero';
import Footer from './componets/footer';
import ProjectGrid from './componets/ProjectGrid';

function App() {
  return (

      <box>
        <box><Navbar/></box>
        <box><Hero/></box>

          <box>
              <ProjectGrid/>
          </box>
        <box><Footer/></box>

      </box>

  );
}

export default App;
