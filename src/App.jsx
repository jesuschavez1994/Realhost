
import { useState } from 'react';
import { OrbitControls } from '@react-three/drei'
import { ThreeScene } from './componentes/ThreeScene'
import { Model } from './componentes/Model'
import { ListWall } from './componentes/ListWall';
import './App.css'


function App() {
  const [selectedWall, setSelectedWall] = useState(null);

  const handleWallSelect = (wallName) => {
    setSelectedWall(wallName);
  };
  return (
    <div style={{height: '100vh', overflow: 'hidden'}}>
      <ThreeScene> 
        <Model selectedWall={selectedWall} />
        <ambientLight />
        <OrbitControls />
      </ThreeScene>
      <ListWall onWallSelect={handleWallSelect} />
    </div>
  )
}

export default App
