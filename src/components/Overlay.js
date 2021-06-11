import Header from "./Header";
import Footer from "./Footer";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
export default function Overlay() {
  useEffect(() => {
    gsap.to(".scroll", {
      scrollTrigger: {
        trigger: ".section-one",
        start: "top top",
        endTrigger: ".section-two",
        end: "top center" ,
              scrub: 1,
      },
      opacity:0
    });
  });
  return (
    <div className="content text-white">
      <section className="section-one">
        <Header />
        <div className="absolute bottom-8 right-8 z-999 scroll">
          <p>
            Scroll To Explore <ArrowDownwardIcon />
          </p>
        </div>
        <div className="outer-main-two">
          <h1 className="text mx-auto text-5xl w-96 font-bold z-999 py-8  text-center main-heading-two">
            quis nostrud
          </h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </section>
      <section className="section-two">
        <div className="ml-4 sm:ml-48 w-96 text">
          <h1 className="text-4xl my-4 ">THE LOREM 1955 CONSECTETU BAG</h1>
          <p className="text-gray-800">
            bag features the equestrian-inspired code from the House composed of
            a double ring and bar.
          </p>
        </div>
      </section>
      <section className="section-three flex">
        <div className="mr-4 sm:mr-48 w-96 text ml-auto">
          <h1 className="text-4xl my-4 ">A SOPHISTICATED MECHANISM</h1>
          <p className="text-gray-800">
            to adjust the length of the shoulder strap allows the bag to be
            carried on one shoulder or cross body.
          </p>
        </div>
      </section>
      <section className="section-four">
        <div className="ml-4 sm:ml-48 w-96 text">
          <p className="text-gray-800">
            bag features the equestrian-inspired code from the House composed of
            a double ring and bar.
          </p>
          <h1 className="text-4xl my-4 ">THE LOREM 1955 CONSECTETU BAG</h1>
        </div>
      </section>
      <section className="section-five">
        <div className="mr-4 sm:mr-48 w-96 text ml-auto">
          <h1 className="text-4xl my-4 ">BUCKET AND A SOFT MESSANGER</h1>
          <p className="text-gray-800">
            to adjust the length of the shoulder strap allows the bag to be
            carried on one shoulder or cross body.
          </p>
        </div>
      </section>
      <section className="section-six">
        <div className="ml-4 sm:ml-48 w-96 text">
          <h1 className="text-4xl my-4 ">THE LOREM 1955 CONSECTETU BAG</h1>
          <p className="text-gray-800">
            bag features the equestrian-inspired code from the House composed of
            a double ring and bar.
          </p>
        </div>
      </section>
      <section className="section-seven">
        <div className="mr-4 sm:mr-48 w-96 text ml-auto">
          <h1 className="text-4xl my-4 ">A SOPHISTICATED MECHANISM</h1>
          <p className="text-gray-800">
            to adjust the length of the shoulder strap allows the bag to be
            carried on one shoulder or cross body.
          </p>
        </div>
      </section>
      <section className="section-eight">
        <div className="ml-4 sm:ml-48 w-96 text">
          <p className="text-gray-800">
            bag features the equestrian-inspired code from the House composed of
            a double ring and bar.
          </p>
          <h1 className="text-4xl my-4 ">THE LOREM 1955 CONSECTETU BAG</h1>
        </div>
      </section>
      <Footer />
    </div>
  );
}
