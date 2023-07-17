// Header component.
// import Image from "next/image";
import 'animate.css'
export default function Hero() {
  return (
    <div className="relative flex w-full">
      <div className="w-1/4 bg-[#fdfff3] h-vh relative flex-col items-center pl-10">
        <h1 className="text-[60px] leading-[4rem] font-['Montserrat'] text-grey-200">Aaxon Solution</h1>
        <p className="text-[18px] animate_animated animate_pulse animate_repeat-3">Where Vision Meets Technology</p>
      </div>
      <div className="w-3/4 h-vh" >
        <img
          src="/assets/heroImage.jpg"
          alt="hero image example"          
        />
      </div>
    </div>
    
  );
};