export default function Work(){
    return (
        <section className="bg-blue-200 py-[80px]">
            <div className="text-center">
                <p className="text-4xl font-bold font-[Nunito]">How We Work</p>
                <p className="mt-2">The following below steps make up our process. Our complete transparent and high-quality work guarantee to provide you with the best solutions.</p>
            </div>
            <div className="mt-[30px]">
            
                {/*Step 1*/}
                <div className="flex justify-between">
                    <div className="ml-[560px] text-center border-boxing pt-6">
                        <p>Step 1</p>
                        <p>Meeting</p>
                    </div>
                    <div className="mr-[240px] border-2 border-boxing p-6 rounded-xl shadow">
                        <p>Initial Meeting (free)</p>
                        <p>Initial Meeting To Define Specific Business Goals</p>
                    </div>
                </div>
                
                {/*Step 2*/}
                <div className="flex justify-between mt-12">
                    <div className="ml-[240px] border-2 border-boxing p-6 rounded-xl shadow">
                        <p>Initial Estimations & Plan (free)</p>
                        <p>Validate Product Ideas Against Business Goals.</p>
                    </div>
                    <div className="mr-[560px] text-center border-boxing pt-6">
                        <p>Step 2</p>
                        <p>Estimations</p>
                    </div>
                </div>
                    
                {/*Step 3*/}
                <div className="flex justify-between">    
                    <div className="ml-[560px] text-center border-boxing pt-6">
                        <p>Step 3</p>
                        <p>project Discovery</p>
                    </div>
                    <div className="mr-[240px] border-2 border-boxing p-6 rounded-xl shadow">
                        <p>Project Discovery Phase</p>
                        <p>Document Specific Product Requirements</p>
                    </div>
                </div>
                
                {/*Step 4*/}
                <div className="flex justify-between">    
                    <div className="ml-[240px] border-2 border-boxing p-6 rounded-xl shadow">
                        <p>Development Phase</p>
                        <p>Develop the Product and User Experience</p>
                    </div>
                    <div className="mr-[560px] text-center border-boxing pt-6">
                        <p>Step 4</p>
                        <p>Development</p>
                    </div>
                </div>

                {/*Step 5*/}                    
                <div className="flex justify-between">
                    <div className="ml-[560px] text-center border-boxing pt-6">
                        <p>Step 5</p>
                        <p>Delivery & Maintenance</p>
                    </div>
                    <div className="mr-[240px] border-2 border-boxing p-6 rounded-xl shadow">
                        <p>Delivery & Maintenance</p>
                        <p>Maintain and Improve the Product</p>
                    </div>

                </div>
            </div>
        </section>
    )
}