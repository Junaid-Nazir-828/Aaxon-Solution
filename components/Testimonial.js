export default function Testimonial() {
    return (
        <section>
            <div className="box-border h-[650px] flex justify-center items-center mt-[550px]">
                <div className="h-[500px] w-[800px]">
                    <div className=" text-center">
                        <div className="text-4xl font-bold font-nunito text-[#4869E1]">
                            <h1>Testimonials</h1>
                        </div>
                        <div className="pt-8 text-[22px]">
                            <p>
                                People I've worked with have said some nice
                                things...
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="border-black flex justify-center pt-16">
                            <img className="h-32 w-32 border-2 rounded-full" src="bill.jpg"></img>
                        </div>
                        <div className="text-center text-[18px] mt-8 font-nunito">
                            <p>"Happy to work with AAxon</p>
                            <p>Happy to work with AAxon</p>
                            <p>Happy to work"</p>
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-[20px] font-bold text-[#4869E1]">Bill Gates</p>
                            <p className="text-[16px]">Founder, Microsoft</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
