import { gsap } from "gsap";
import {useEffect} from "react"
export default function CircleText() {
    useEffect(() => {
       gsap.to('.container', {rotation: '360', ease: 'none', repeat: -1, duration:20})
    })
  return (
    <div className="container z-999">
      <svg className="circleText" viewBox="0 0 500 500" data-duration="5">
        <path
          id="textcircle"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          data-duration="5"
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
        ></path>

        <text dy="-25">
          <textPath xlinkHref="#textcircle">
            <tspan>·</tspan>
            SLAWIK
            <tspan>·</tspan>
            MEDIEN
            <tspan>·</tspan>
            DESIGNER
          </textPath>
        </text>
      </svg>
    </div>
  );
}
