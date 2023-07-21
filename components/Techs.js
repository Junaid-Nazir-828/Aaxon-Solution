export default function Techs() {
    return (
        <section className="relative mt-[980px]">
            <div className="bg-[#a6bdd6] text-center box-border h-[500px] pt-20">
                <p className="text-4xl font-bold font-nunito">Technologies We Work on</p>
            </div>
            <div className="bg-white box-border mx-[120px] h-[850px] flex absolute top-[200px] text-center border-2 border-gray-100 rounded-2xl shadow-[0_5px_5px_0_rgba(233,240,243,0.5)]">
                <div className="w-[432px] border-r-2">
                    <div className="mt-24">
                        <img
                            src="/icons/world-wide-web.png"
                            className="w-[60px] h-[60px] m-auto"></img>
                    </div>
                    <p className="mt-4 text-2xl font-bold">Web Development</p>
                    <p className="text-[18px] leading-8 mx-4 mt-6 font-nunito">
                        Leveraging the latest technologies and industry best
                        practices to design and develop responsive, scalable,
                        and user-friendly websites that drive results.
                    </p>
                    <p className="mt-12 text-[#4869E1] text-[21px] font-nunito">Dev Tools</p>
                    <ul className="text-[18px] leading-8 font-nunito">
                        <li>Angular</li>
                        <li>Django</li>
                        <li>Express JS</li>
                        <li>FastAPI</li>
                        <li>React</li>
                        <li>NodeJS</li>
                    </ul>
                </div>

                <div className="w-[432px] border-r-2">
                    <div className="mt-24">
                        <img
                            src="/icons/data-analytics.png"
                            className="w-[60px] h-[60px] m-auto"></img>
                    </div>
                    <p className="mt-4 text-2xl font-bold">Data Analytics</p>
                    <p className="text-[18px] leading-8 mx-4 mt-6 font-nunito">
                        Our data analytics solutions unlock valuable insights to
                        drive informed decision-making to help businesses gain a
                        competitive edge.
                    </p>
                    <p className="mt-12 text-[#4869E1] text-[21px] font-nunito">
                        Data Tools
                    </p>
                    <ul className="text-[18px] leading-8 font-nunito">
                        <li>Python</li>
                        <li>Matplotlib</li>
                        <li>Microsoft Power BI</li>
                        <li>Microdoft Excel</li>
                        <li></li>
                    </ul>
                </div>

                <div className="w-[432px]">
                    <div className="mt-24">
                        <img
                            src="/icons/sap.png"
                            className="w-[60px] h-[60px] m-auto"></img>
                    </div>
                    <p className="mt-4 text-2xl font-bold">
                        System Applications and Products
                    </p>
                    <p className="text-[18px] leading-8 mx-4 mt-6 font-nunito">
                        Using SAP's robust suite of enterprise software to
                        integrate core business functions
                        and enable seamless collaboration across departments.
                    </p>
                    <p className="mt-12 text-[#4869E1] text-[21px] font-nunito">SAP Tools</p>
                    <ul className="text-[18px] leading-8 font-nunito">
                        <li>Financial Accounting (FI)</li>
                        <li>Financial Supply Chain Management (FSCM)</li>
                        <li>Controlling (CO)</li>
                        <li>Materials Management (MM)</li>
                        <li>Sales and Distribution (SD)</li>
                        <li>Logistics Execution (LE)</li>
                        <li>Production Planning (PP)</li>
                        <li>Quality Management (QM)</li>
                        <li>Plant Maintenance (PM)</li>
                        <li>Project System (PS)</li>
                        <li>Human Resources (HR)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
