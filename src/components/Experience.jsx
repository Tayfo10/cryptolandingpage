import { Sphere } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense } from "react";



export default function Experience() {
  const sphere = useRef();
  const dirLight = useRef();
  const texture = useTexture("./earthtexture.jpg");
  texture.anisotropy = 512;
  
  
  useFrame(() => {
    sphere.current.rotation.y += 0.0005;
  }, []);

  return (
    <>
      
      <directionalLight position={[1, 1, 5]} ref={dirLight} intensity={3} />
      <Suspense>
        <Sphere ref={sphere} position={[0, -1.9, 0]} scale={3.5} args={[1,100,100]}>
          <meshStandardMaterial map={texture} />
        </Sphere>
      </Suspense>
    </>
  );
}
