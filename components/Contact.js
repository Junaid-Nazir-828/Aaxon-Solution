// rgb(250,225,183) color for logo
export default function Contact() {
  return (
    <section className="">      
      <div className="h-[1080px] shadow border-[0.5px] text-center relative overflow-hidden">
        {/* Div for strips*/}
        {/* */}
        <div className="absolute left-[1050px] -rotate-[16deg] -mt-[104px]">
          <div className="flex">
            <div className="bg-primary w-60 h-[1250px]"></div>
            <div className="bg-primary w-60 h-[1000x] ml-16"></div>
          </div>
        </div>

        {/* Div for form and heading*/}
        <div className="absolute inset-0 z-2">
          {/* Div for Upper Section */}
          <div className="pt-32 ">
            <div className="">
              <h1 className="text-[40px] text-bold font-bold">
                LET’S START SOMETHING NEW
              </h1>
            </div>
            <div>
              <p className="text-[28px] mt-8">
                Embark on your Digital Transformation journey with AAxon today
              </p>
            </div>
          </div>

          {/* Div for Form Section */}
          <div className="pt-16">
            {/* First Row */}
            <div className="flex">
              <div className="flex mx-auto">
                <div className="mr-4">
                  <div className="text-left">
                    <label className="text-[#33475b] text-[16px]">
                      First name
                    </label>
                  </div>
                  <div className="mt-4">
                    <input className="w-52 border-b-[2px] border-[#cad5e2]"></input>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-left">
                    <label className="text-[#33475b] text-[16px]">
                      Last name
                    </label>
                  </div>
                  <div className="mt-4">
                    <input className="w-52 border-b-[2px] border-[#cad5e2]"></input>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="">
              <div className="">
                <div className="mr-72 mt-6">
                  <label className="text-[#33475b] text-[16px]">
                    Mobile Phone Number
                  </label>
                </div>
                <div className="mt-4">
                  <input className="w-[450px] border-b-[2px] border-[#cad5e2]"></input>
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="">
              <div>
                <div className="mr-[411px] mt-6">
                  <label className="text-[#33475b] text-[16px]">Email</label>
                </div>
                <div className="mt-4">
                  <input className="w-[450px] border-b-[2px] border-[#cad5e2]"></input>
                </div>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="">
              <div>
                <div className="mr-[337px] mt-6">
                  <label className="text-[#33475b] text-[16px]">
                    Company name
                  </label>
                </div>
                <div className=" mt-4">
                  <input className="w-[450px] border-b-[2px] border-[#cad5e2]"></input>
                </div>
              </div>
            </div>

            {/* Fifth Row */}
            <div className="">
              <div>
                <div className="mr-[264px] mt-6">
                  <label className="text-[#33475b] text-[16px]">
                    What are you looking for?
                  </label>
                </div>
                <div className="mt-4">
                  <select className="w-[450px] border-b-[2px] border-[#cad5e2] bg-white">
                    <option disabled value="" selected>
                      Select Option
                    </option>
                    <option>Web Development</option>
                    <option>Data Analytics</option>
                    <option>SAP</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Sixth Row */}
            <div className="">
              <div>
                <div className="mr-[202px] mt-6">
                  <label className="text-[#33475b] text-[16px]">
                    Industry your company belongs to
                  </label>
                </div>
                <div className="mt-4">
                  <select className="w-[450px] border-b-[2px] border-[#cad5e2] bg-white">
                    <option disabled value="" selected>
                      Select Option
                    </option>
                    <option value="Accounting">Accounting</option>
                    <option value="Advertising">Advertising</option>
                    <option value="Airlines/Aviation">Airlines/Aviation</option>
                    <option value="Alternative Dispute Resolution">
                      Alternative Dispute Resolution
                    </option>
                    <option value="Alternative Medicine">
                      Alternative Medicine
                    </option>
                    <option value="Animation">Animation</option>
                    <option value="Apparel &amp; Fashion">
                      Apparel &amp; Fashion
                    </option>
                    <option value="Architecture &amp; Planning">
                      Architecture &amp; Planning
                    </option>
                    <option value="Arts and Crafts">Arts and Crafts</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Aviation &amp; Aerospace">
                      Aviation &amp; Aerospace
                    </option>
                    <option value="Banking">Banking</option>
                    <option value="Biotechnology">Biotechnology</option>
                    <option value="Broadcast Media">Broadcast Media</option>
                    <option value="Building Materials">
                      Building Materials
                    </option>
                    <option value="Business Supplies and Equipment">
                      Business Supplies and Equipment
                    </option>
                    <option value="Capital Markets">Capital Markets</option>
                    <option value="Chemicals">Chemicals</option>
                    <option value="Civic &amp; Social Organization">
                      Civic &amp; Social Organization
                    </option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Commercial Real Estate">
                      Commercial Real Estate
                    </option>
                    <option value="Computer &amp; Network Security">
                      Computer &amp; Network Security
                    </option>
                    <option value="Computer Games">Computer Games</option>
                    <option value="Computer Hardware">Computer Hardware</option>
                    <option value="Computer Networking">
                      Computer Networking
                    </option>
                    <option value="Computer Software">Computer Software</option>
                    <option value="Consumer Electronics">
                      Consumer Electronics
                    </option>
                    <option value="Consumer Goods">Consumer Goods</option>
                    <option value="Consumer Services">Consumer Services</option>
                    <option value="Cosmetics">Cosmetics</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Defense &amp; Space">
                      Defense &amp; Space
                    </option>
                    <option value="E-Learning">E-Learning</option>
                    <option value="Education Management">
                      Education Management
                    </option>
                    <option value="Electrical/Electronic Manufacturing">
                      Electrical/Electronic Manufacturing
                    </option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Environmental Services">
                      Environmental Services
                    </option>
                    <option value="Events Services">Events Services</option>
                    <option value="Executive Office">Executive Office</option>
                    <option value="Facilities Services">
                      Facilities Services
                    </option>
                    <option value="Farming">Farming</option>
                    <option value="Financial Services">
                      Financial Services
                    </option>
                    <option value="Fine Art">Fine Art</option>
                    <option value="Fishery">Fishery</option>
                    <option value="Food &amp; Beverages">
                      Food &amp; Beverages
                    </option>
                    <option value="Food Production">Food Production</option>
                    <option value="Fund-Raising">Fund-Raising</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Gambling &amp; Casinos">
                      Gambling &amp; Casinos
                    </option>
                    <option value="Glass, Ceramics &amp; Concrete">
                      Glass, Ceramics &amp; Concrete
                    </option>
                    <option value="Government Administration">
                      Government Administration
                    </option>
                    <option value="Government Relations">
                      Government Relations
                    </option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Health, Wellness and Fitness">
                      Health, Wellness and Fitness
                    </option>
                    <option value="Hospital &amp; Health Care">
                      Hospital &amp; Health Care
                    </option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Import and Export">Import and Export</option>
                    <option value="Individual &amp; Family Services">
                      Individual &amp; Family Services
                    </option>
                    <option value="Industrial Automation">
                      Industrial Automation
                    </option>
                    <option value="Industry">Industry</option>
                    <option value="Information Services">
                      Information Services
                    </option>
                    <option value="Information Technology and Services">
                      Information Technology and Services
                    </option>
                    <option value="International Affairs">
                      International Affairs
                    </option>
                    <option value="International Trade and Development">
                      International Trade and Development
                    </option>
                    <option value="Internet">Internet</option>
                    <option value="Investment Banking">
                      Investment Banking
                    </option>
                    <option value="Investment Management">
                      Investment Management
                    </option>
                    <option value="Judiciary">Judiciary</option>
                    <option value="Law Enforcement">Law Enforcement</option>
                    <option value="Law Practice">Law Practice</option>
                    <option value="Legal Services">Legal Services</option>
                    <option value="Legislative Office">
                      Legislative Office
                    </option>
                    <option value="Leisure, Travel &amp; Tourism">
                      Leisure, Travel &amp; Tourism
                    </option>
                    <option value="Libraries">Libraries</option>
                    <option value="Logistics and Supply Chain">
                      Logistics and Supply Chain
                    </option>
                    <option value="Luxury Goods &amp; Jewelry">
                      Luxury Goods &amp; Jewelry
                    </option>
                    <option value="Machinery">Machinery</option>
                    <option value="Management Consulting">
                      Management Consulting
                    </option>
                    <option value="Maritime">Maritime</option>
                    <option value="Market Research">Market Research</option>
                    <option value="Marketing and Advertising">
                      Marketing and Advertising
                    </option>
                    <option value="Mechanical or Industrial Engineering">
                      Mechanical or Industrial Engineering
                    </option>
                    <option value="Media Production">Media Production</option>
                    <option value="Medical Devices">Medical Devices</option>
                    <option value="Medical Practice">Medical Practice</option>
                    <option value="Mental Health Care">
                      Mental Health Care
                    </option>
                    <option value="Military">Military</option>
                    <option value="Mining &amp; Metals">
                      Mining &amp; Metals
                    </option>
                    <option value="Motion Pictures and Film">
                      Motion Pictures and Film
                    </option>
                    <option value="Museums and Institutions">
                      Museums and Institutions
                    </option>
                    <option value="Music">Music</option>
                    <option value="Nanotechnology">Nanotechnology</option>
                    <option value="Newspapers">Newspapers</option>
                    <option value="Nonprofit Organization Management">
                      Nonprofit Organization Management
                    </option>
                    <option value="Oil &amp; Energy">Oil &amp; Energy</option>
                    <option value="Online Media">Online Media</option>
                    <option value="Outsourcing/Offshoring">
                      Outsourcing/Offshoring
                    </option>
                    <option value="Package/Freight Delivery">
                      Package/Freight Delivery
                    </option>
                    <option value="Packaging and Containers">
                      Packaging and Containers
                    </option>
                    <option value="Paper &amp; Forest Products">
                      Paper &amp; Forest Products
                    </option>
                    <option value="Performing Arts">Performing Arts</option>
                    <option value="Pharmaceuticals">Pharmaceuticals</option>
                    <option value="Philanthropy">Philanthropy</option>
                    <option value="Photography">Photography</option>
                    <option value="Plastics">Plastics</option>
                    <option value="Political Organization">
                      Political Organization
                    </option>
                    <option value="Primary/Secondary Education">
                      Primary/Secondary Education
                    </option>
                    <option value="Printing">Printing</option>
                    <option value="Professional Training &amp; Coaching">
                      Professional Training &amp; Coaching
                    </option>
                    <option value="Program Development">
                      Program Development
                    </option>
                    <option value="Public Policy">Public Policy</option>
                    <option value="Public Relations and Communications">
                      Public Relations and Communications
                    </option>
                    <option value="Public Safety">Public Safety</option>
                    <option value="Publishing">Publishing</option>
                    <option value="Railroad Manufacture">
                      Railroad Manufacture
                    </option>
                    <option value="Ranching">Ranching</option>
                    <option value="Recreational Facilities and Services">
                      Recreational Facilities and Services
                    </option>
                    <option value="Religious Institutions">
                      Religious Institutions
                    </option>
                    <option value="Renewables &amp; Environment">
                      Renewables &amp; Environment
                    </option>
                    <option value="Research">Research</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Security and Investigations">
                      Security and Investigations
                    </option>
                    <option value="Semiconductors">Semiconductors</option>
                    <option value="Shipbuilding">Shipbuilding</option>
                    <option value="Sporting Goods">Sporting Goods</option>
                    <option value="Sports">Sports</option>
                    <option value="Staffing and Recruiting">
                      Staffing and Recruiting
                    </option>
                    <option value="Supermarkets">Supermarkets</option>
                    <option value="Telecommunications">
                      Telecommunications
                    </option>
                    <option value="Textiles">Textiles</option>
                    <option value="Think Tanks">Think Tanks</option>
                    <option value="Tobacco">Tobacco</option>
                    <option value="Translation and Localization">
                      Translation and Localization
                    </option>
                    <option value="Transportation/Trucking/Railroad">
                      Transportation/Trucking/Railroad
                    </option>
                    <option value="Utilities">Utilities</option>
                    <option value="Venture Capital &amp; Private Equity">
                      Venture Capital &amp; Private Equity
                    </option>
                    <option value="Veterinary">Veterinary</option>
                    <option value="Warehousing">Warehousing</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Wine and Spirits">Wine and Spirits</option>
                    <option value="Wireless">Wireless</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Broadcasting">Broadcasting</option>
                    <option value="Chemical Industry">Chemical Industry</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Communication">Communication</option>
                    <option value="Computer">Computer</option>
                    <option value="Construction">Construction</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Design">Design</option>
                    <option value="Distribution and Logistics">
                      Distribution and Logistics
                    </option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Media">Media</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Restaurant and Cafes">
                      Restaurant and Cafes
                    </option>
                    <option value="Textile">Textile</option>
                    <option value="Tourism">Tourism</option>
                    <option value="Trade">Trade</option>
                    <option value="Transport">Transport</option>
                    <option value="Retail &amp; FMCG">Retail &amp; FMCG</option>
                    <option value="Energy">Energy</option>
                    <option value="Banking &amp; Finance">
                      Banking &amp; Finance
                    </option>
                    <option value="Health Care">Health Care</option>
                    <option value="Pharmaceutical">Pharmaceutical</option>
                    <option value="Higher Education">Higher Education</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Aviation">Aviation</option>
                    <option value="Public Sector">Public Sector</option>
                    <option value="Other">Other</option>
                    <option value="FMCG">FMCG</option>
                    <option value="Retail">Retail</option>
                    <option value="Conglomerate">Conglomerate</option>
                    <option value="Insurance">Insurance</option>
                    <option value="WRITING AND EDITING">
                      WRITING AND EDITING
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Seventh Row */}
            <div className="">
              <div>
                <div className="mr-[384px] mt-6">
                  <label className="text-[#33475b] text-[16px]">Message</label>
                </div>
                <div className="mt-4">
                  <textarea className="w-[450px] border-b-[2px] border-[#cad5e2]"></textarea>
                </div>
              </div>
            </div>

            {/* Eigth Row */}
            <div className="">
              <div>
                <div className="mr-[334px] mt-12">
                  <button className="bg-primary border-[1px] rounded-[3px] text-white font-bold px-8 py-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
