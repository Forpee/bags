import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model({ anim }) {
  const ref = useRef();
  
  useFrame(() => {
    ref.current.position.x = -2 * anim.x;
    ref.current.position.y = -1.5 * anim.y;
    ref.current.rotation.y = -1.5 * anim.x;
  });
  const gltf = useLoader(GLTFLoader, "./assets/scene.gltf");
  return (
    <group ref={ref}>
      <primitive object={gltf.scene} position={[0,-11,0]} scale={40} />
    </group>
  );
}
