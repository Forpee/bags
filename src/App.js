import React, { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Canvas3D from "./components/Canvas3D";
import Overlay from "./components/Overlay";
import GrayOverlay from "./components/GrayOverlay";
import Clouds from "./components/Clouds";
import CircleText from "./components/CircleText";
function App() {
  const [main, setMain] = useState();
  const [scrolled, setScrolled] = useState(false);

  const ref = useRef();

  // useEffect(()=>{

  //   function handleScroll(){
  //     setScrolled(true)
  //   }

  //   window.addEventListener('scroll', handleScroll)

  // })

  useEffect(() => {
    setMain(ref.current.children[1]);
  }, [main]);

  return (
    <div>
      <div ref={ref}>
        <Clouds />
        <div>
          <CircleText />
        </div>
        <div className="canvas">
          <Canvas3D mainRef={main} />
        </div>
        <div className="overlay">
          <Overlay />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
