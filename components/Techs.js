export default function Techs(){
    return (
        <section className="relative">
            <div className="bg-slate-300 text-center box-border h-[500px] pt-20">
                <p className="text-4xl">Technologies we work on</p>                
            </div>

            <div className="box-border bg-green-200 mx-[120px] h-[800px] flex absolute top-[200px] text-center rounded-2xl">
                    <div className="w-[432px] border-r-4">
                        <div className="mt-24">
                            <img src="/icons/world-wide-web.png" className="w-[60px] h-[60px] m-auto"></img>
                        </div>
                        <p className="mt-4 text-2xl font-bold">Web Development</p>                        
                        <p className="text-[18px] leading-8 mx-4 mt-6">Leveraging the latest technologies and industry best practices to design and develop responsive, scalable, and user-friendly websites that drive results.</p>                                       
                        <p className="mt-12 text-blue-800 text-[21px]">Dev Tools</p>
                        <ul className="text-[18px] leading-8">
                            <li>Angular</li>
                            <li>Django</li>
                            <li>Express JS</li>
                            <li>FastAPI</li>
                            <li>React</li>
                            <li>NodeJS</li>                            
                        </ul>
                    </div>
                    
                    <div className="w-[432px] border-r-4">
                        <div className="mt-24">
                            <img src="/icons/data-analytics.png" className="w-[60px] h-[60px] m-auto"></img>
                        </div>
                        <p className="mt-4 text-2xl font-bold">Data Analytics</p>                    
                        <p className="text-[18px] leading-8 mx-4 mt-6">Our data analytics solutions unlock valuable insights to drive informed decision-making to help businesses gain a competitive edge and optimize their operations.</p>                        
                        <p className="mt-12 text-blue-800 text-[21px]">Data Tools</p>
                        <ul className="text-[18px] leading-8">
                            <li>Python</li>
                            <li>Matplotlib</li>
                            <li>Microsoft Power BI</li>
                            <li>Microdoft Excel</li>
                            <li></li>                                                        
                        </ul>
                    </div>
    
                    <div className="w-[432px]">
                        <div className="mt-24">
                            <img src="/icons/sap.png" className="w-[60px] h-[60px] m-auto"></img>
                        </div>
                        <p className="mt-4 text-2xl font-bold">System Applications and Products</p>
                        <p className="text-[18px] leading-8 mx-4 mt-6">Using SAP's robust suite of enterprise software to integrate core business functions, improve productivity, and enable seamless collaboration across departments.</p>
                        <p className="mt-12 text-blue-800 text-[21px]">SAP Tools</p>
                        <ul className="text-[18px] leading-8">
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
    )
}