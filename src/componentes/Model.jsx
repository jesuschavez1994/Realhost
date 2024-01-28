import { useLoader } from 'react-three-fiber';
import { MeshStandardMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useEffect, useRef } from 'react'


export const Model = ({ selectedWall }) => {
  
    const gltf = useLoader(GLTFLoader, 'src/assets/Barn_Testing.glb');
    const walls = useRef([]);
     // Crear materiales para diferentes partes del modelo
     const wallMaterial = new MeshStandardMaterial({ color: 0x00ff00 }); // Color verde para las paredes por defecto
     const ceiling = new MeshStandardMaterial({ color: 0x0000ff });  // Color azul para el techo
     const wallSelected = new MeshStandardMaterial({ color: 0xFF3333 });  // color pared seleccionada
    
    const getMaterialByWall = (wallName) => {
        if (wallName.includes(selectedWall)) {
          return wallSelected
        } 
        else if (wallName.includes('Mesh_7')) {
            return ceiling; // Color para el techo
        }
        return wallMaterial;
    };

    useEffect(() => {
      walls.current.traverse((child) => {
        if (child.isMesh) {
          const wallName = child.name;
          child.material = getMaterialByWall(wallName);
        }
      });
    }, [selectedWall]);
    

     return  (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} ref={walls} scale={[1, 1, 1]} />
      </Suspense>
    );
}
