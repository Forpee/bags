import fog from "../images/fog.png";
export default function Clouds() {
  return (
    <div className="w-screen h-screen fixed top-0 bottom-0 right-0 left-0 clouds">
      <div className="relative w-full h-full">
        
        <img
          src="https://www.transparentpng.com/thumb/clouds/aT7LU6-clouds.png"
          alt="clouds best png @transparentpng.com"
          className="opacity-20 absolute fog-img top-20 left-64"
        />
          <img
          src="https://www.transparentpng.com/thumb/clouds/aT7LU6-clouds.png"
          alt="clouds best png @transparentpng.com"
          className="opacity-20 absolute fog-img top-64 right-64"
        />
      </div>
    </div>
  );
}
