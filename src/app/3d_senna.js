"use client" 
import { Canvas, useLoader, ambientLight, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useEffect, useRef } from "react";
import {
    Environment,
    OrbitControls,
    Html,
    useProgress,
    useGLTF
  } from "@react-three/drei";

  
  export default function Render3d_senna() {
    function Loader() {
        const { active, progress, errors, item, loaded, total } = useProgress();
        return <Html center>{progress} % loaded</Html>;
    }
    //model.current.rotation = Math.PI/2
    const model = useRef()
    console.log(model)
    const Model = () => {
        useFrame(() => {
            if(model.current) {
                // rotating the object
                model.current.rotation.z -= 0.0075;
            }
        });
          const { nodes, materials } = useLoader(GLTFLoader, "/3d/metto senna.glb");
          return(
              <group dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.main_object.geometry} material={materials['slim_material']} ref={model} rotation={[14.25, 0.25, 0]} position={[0, 0, 3.6]}/>
          </group>
        )
    };
    const Modellow = () => {
        useFrame(() => {
            if(model.current) {
                // rotating the object
                model.current.rotation.z -= 0.0075;
            }
        });
          const { nodes, materials } = useLoader(GLTFLoader, "/3d/metto senna.glb");
          return(
              <group dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.main_object.geometry} material={materials['slim_material']} ref={model} rotation={[14.25, 0.25, 0]} position={[0, 0, 3.6]}/>
          </group>
        )
    };
    useGLTF.preload('/3d/metto slim.glb')

    return(
      <>
        <div className="hidden lg:flex justify-center items-center h-full relative">
        <Canvas enablezoom="false">
        <Suspense fallback={<Loader />}>
        <ambientLight intensity={3}/>
          <Model />
          <OrbitControls enableDamping={false} enablePan={false} enableZoom={false} enableRotate={false}/>
        </Suspense>
      </Canvas>
      <div className="flex justify-center items-center absolute -z-10 size-full">
        <img src="/3d/background.svg" className="size-full" alt="3d background"></img>
      </div>
      </div>
        <div className="flex lg:hidden justify-center items-center relative w-full lg:w-1/3 h-full">
        <Canvas enablezoom="false">
        <Suspense fallback={<Loader />}>
        <ambientLight intensity={3}/>
          <Modellow />
          <OrbitControls enableDamping={false} enablePan={false} enableZoom={false} enableRotate={false}/>
        </Suspense>
      </Canvas>
      <div className="flex justify-center items-center absolute -z-10 size-full">
        <img src="/3d/background.svg" className="size-full" alt="3d background"></img>
      </div>
      </div>
      </>
      )
      

}