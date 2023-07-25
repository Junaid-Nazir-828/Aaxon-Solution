// <div className="mt-8">
//               <input
//                 className="border-b-2 border-white bg-transparent w-60 .placeholder-gray-200 text-white"
//                 placeholder="Enter your email id"
//               ></input>
//             </div>

export default function Footer() {
    return (
      <section>
        <div className="relative h-96 bg-black opacity-90">
          <div className="h-48 w-60 absolute top-20 left-24 ">
            <div className="b-white">
              <a href="#">
                <img className="h-8 w-20" src="AA.jpg"></img>
              </a>
            </div>
            <div>
              <p className="text-[12px] text-white mt-8">
                Stay Connected with Aaxon Solution - Your Trusted Tech Partner.
                Explore our innovative solutions, unleash your digital potential,
                and embark on a journey of transformation. Contact us today to
                start your next tech project.
              </p>
            </div>
          </div>
          <div className="h-52 w-[480px] absolute left-[430px] top-20">
            <div className="">
              <h1 className="underline decoration-white decoration-1 text-white font-bold text-[18px]">
                offices
              </h1>
            </div>
            <div className="mt-8 flex justify-between">
              <div>
                <div className="text-[12px] text-white">
                  <p>103, Al Makhawi</p>
                  <p>Building, Oud Metha,</p>
                  <p>POBox: 80744,</p>
                  <p>Dubai</p>
                </div>
                <div className="mt-4">
                  <a
                    href="mailto:info@aaxonsolutions.com"
                    className="text-[12px] text-white underline decoration-white"
                  >
                    info@aaxonsolutions.com
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-[12px] text-white font-bold">
                    +971 04 3984283
                  </p>
                </div>
              </div>
              <div>
                <div className="text-[12px] text-white">
                  <p>5th floor Daily</p>
                  <p>Kashmir Link building,</p>
                  <p>Ghouri Town Service Road,</p>
                  <p>Pakistan</p>
                </div>
                <div className="mt-4">
                  <a
                    href="mailto:info@aaxonsolutions.com"
                    className="text-[12px] text-white underline decoration-white"
                  >
                    info@aaxonsolutions.com
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-[12px] text-white font-bold">
                    +92 51 8730099
                  </p>
                </div>
              </div>
              <div>
                <div className="text-[12px] text-white">
                  <p>548-wasaga</p>
                  <p>crescent, waterloo</p>
                  <p>ON N2Y 2L8,</p>
                  <p>Canada</p>
                </div>
                <div className="mt-4">
                  <a
                    href="mailto:info@aaxonsolutions.com"
                    className="text-[12px] text-white underline decoration-white"
                  >
                    info@aaxonsolutions.com
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-[12px] text-white font-bold">
                    +1 (647) 677-0454
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-52 w-20 absolute left-[1010px] top-20">
            <div>
              <h1 className="underline decoration-white decoration-1 text-white font-bold text-[18px]">
                Links
              </h1>
            </div>
            <div className="mt-8">
              <ul className="text-white leading-8 text-[12px]">
                <li>
                  <a href="#" className="hover:text-[14px] hover:font-bold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[14px] hover:font-bold">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[14px] hover:font-bold">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[14px] hover:font-bold">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[14px] hover:font-bold">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-52 top-20 w-60 absolute left-[1170px]">
            <div>
              <h1 className="underline decoration-white decoration-1 text-white font-bold text-[18px]">
                Contact US
              </h1>
            </div>
            
            <div className="mt-8">
              <div className="flex justify-between">
                <a href="#">
                  <img
                    className="h-8 w-8 hover:h-10 hover:w-10"
                    src="fb_pic.jpg"
                  ></img>
                </a>
                <a href="#">
                  <img
                    className="h-8 w-8 hover:h-10 hover:w-10"
                    src="link_pic.jpg"
                  ></img>
                </a>
                <a href="#">
                  <img
                    className="h-8 w-8 hover:h-10 hover:w-10"
                    src="pin_pic.jpg"
                  ></img>
                </a>
                <a href="#">
                  <img
                    className="h-8 w-8 hover:h-10 hover:w-10"
                    src="what_pic.jpg"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="h-12 w-[1350px] left-20 top-80 absolute border-t-2 border-white">
            <div className="text-white text-center mt-4 text-[12px]">
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  