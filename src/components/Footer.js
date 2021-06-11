import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
export default function Footer() {
  return (
    <div className=" footer h-screen z-999 absolute w-screen">
      <footer className=" text-white overflow-hidden  relative h-full">
        <div className="w-screen sm:flex justify-evenly mt-10">
          <div className=" sm:w-1/4">
            <hr className="border-1 border-white"></hr>
          </div>
          <div>
            <h1 className="text-3xl text-center">CAROL BAGS</h1>
          </div>
          <div className="sm:w-1/4">
            <hr className="border-1 border-white"></hr>
          </div>
        </div>
        <div className="sm:flex justify-evenly pt-10">
          <div>
            <ul className="text-center">
              <a href="/">
                <li> HOME</li>
              </a>
              <a href="/project-principles">
                <li>PROJECT PRINCIPLES</li>
              </a>
              <a href="/gallery">
                <li>GALLERY</li>
              </a>
            </ul>
          </div>
          <div className="flex justify-evenly sm:py-0 py-10">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
          <div>
            <ul className="text-center">
              <a href="/contact-us">
                <li> CONTACT </li>
              </a>
              <a href="/cv">
                <li>COMPANY CV</li>
              </a>
              <a href="/about">
                <li>ABOUT</li>
              </a>
            </ul>
          </div>
        </div>
        <div className='my-16 ml-24'>
            <h1 className="text-8xl font-bold">
                Have an Idea?
            </h1>
            <h1 className="text-7xl underline">Tell us about it</h1>
        </div>

        <div className="absolute bottom-0 ghm-tag right-0 left-0 py-8 ">
          <p className="text-center">
            {" "}
            © 2021 | MAINTAINED BY GLASS HOUSE MEDIA
          </p>
        </div>
      </footer>
    </div>
  );
}
