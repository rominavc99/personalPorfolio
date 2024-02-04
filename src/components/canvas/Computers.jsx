import { Suspense, useEffect, useState, startTransition } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {

 
  const computer = useGLTF("./heropd/pcPortoflio.gltf");
  
  return (

    
    <mesh>
      <group>

         <hemisphereLight intensity={7}
          groundColor="black" />
        
        <spotLight  
          position={[20, 20, 20]}
          angle={4}  
          intensity={7}
          castShadow
          shadow-mapSize={1024}
        
        > </spotLight>
      <primitive
        object={computer.scene}
        scale={ isMobile ? 0.5 : 0.75}
        position={ isMobile ? [0, -2.5, 0] : [.5, -1, .5]}
        rotation={[0, 6.3, 0]}
      />

      </group>
       
    </mesh>   
 
   
    
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows 
      camera={{ position: [20, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={ isMobile} />

      </Suspense>
      <Preload all/>

    </Canvas>
  )
}

export default ComputersCanvas;