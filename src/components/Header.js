import MenuIcon from '@material-ui/icons/Menu';
export default function Header() {
  return (
    <div className="w-screen flex Z-999 absolute top-0">
      <h1 className="text-4xl my-4 mx-4 opacity-60">cb bags</h1>
     <div>
     <p className="opacity-60 top-6 text-xl right-80 absolute">our showreel</p>
     <p className="opacity-60 top-6 text-xl right-48 absolute">menu</p>
     <button className="menu-btn rounded-full bg-white opacity-60 right-8  top-4 z-999 fixed"><MenuIcon color="disabled"/></button>
     </div>
    </div>
  );
}
