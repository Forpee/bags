import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Model from "./Model";
gsap.registerPlugin(ScrollTrigger);
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
function Plane() {
  return (
    <mesh receiveShadow position={[0, -2, -5]}>
      <planeBufferGeometry args={[100, 100]} />
      <shadowMaterial color={["black"]} opacity={0.5} />
    </mesh>
  );
}
export default function Canvas3D({ mainRef }) {
  let animable = {
    x: -3,
    y: -3,
  };
  useEffect(() => {
    if (mainRef) {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-one",
          start: "top top",
          endTrigger: ".section-four",
          end: "bottom bottom",
          snap: 1,
          scrub: 1,
        },
      });
      tl1.to(animable, {
        x: 3,
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-five",
          start: "top top",
          endTrigger: ".section-eight",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      tl2.to(animable, {
        x: -3,
      });
    }
  });

  function Light() {
    const ref = useRef();

    return (
      <directionalLight
        ref={ref}
        castShadow
        position={[-40, 0, 0]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    );
  }

  return (
    <Canvas camera={{ position: [-40, 0, 0], fov: 30 }}>
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <spotLight
        position={[-40, 10, 10]}
        angle={0.2}
        intensity={2}
        castShadow
      />
      <ambientLight intensity={2} />
      <Suspense fallback={<Loader />}>
        <Model anim={animable} />
      </Suspense>
      <Plane />
      <Light />
    </Canvas>
  );
}
