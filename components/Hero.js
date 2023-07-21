// Header component.
// import Image from "next/image";
import "animate.css";
export default function Hero() {
    return (
        <div className="relative flex w-full font-nunito">
            <div className="w-1/4 bg-[#fdfff3] h-vh relative flex-col items-center pl-10 pt-20"></div>
            <div className="bg-[#fdfff3] absolute items-center w-[580px] top-[100px] left-[50px]">
                <h1 className="text-[120px] leading-[7rem] text-gray-500">
                    <span className="text-primary">A</span>Axon Solutions
                </h1>
                <p className="text-[34px]">Where Vision Meets Technology</p>
            </div>
            <div className="w-3/4 h-vh">
                <img src="/assets/heroImage.jpg" alt="hero image example" />
            </div>
        </div>
    );
}
