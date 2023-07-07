import Image from 'next/image';
import Link from 'next/link';
import NavLogo from '../public/assets/Aaxon Main Logo Transparent bg.svg'


const Nav = () => {    
  return (
    <>
    <header className="border-b bg-white border-gray-300">
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
            <Link href="/">
        <Image
            src={NavLogo}
            alt='logo'
            className='cursor-pointer w-40'
          />
          </Link>          
          <nav className={`block lg:flex lg:items-center lg:w-auto w-full`}>
            <ul className="text-base text-gray-400 lg:flex lg:justify-between">
                <li className="lg:px-5 py-2 hover:text-gray-500 font-semibold">
                    <Link href="/">Home</Link>

                </li>
                <li className="lg:px-5 py-2 hover:text-gray-500 font-semibold">
                    <Link href="/about">About</Link>
    
                </li>
                <li className="lg:px-5 py-2 hover:text-gray-500 font-semibold">
                    <Link href="/services">Services</Link>

                </li>
                
                <li className="lg:px-5 py-2 hover:text-gray-500 font-semibold">
                    <Link href="/technologies">Technologies</Link>

                </li>
                <li className="lg:px-5 py-2 hover:text-gray-500 font-semibold">
                    <Link href="/careers">Careers</Link>

                </li>
                <li className="lg:px-5 py-2 hover:text-gray-500 font-semibold">
                    <Link href="/contact">Contact</Link>

                </li>

            </ul>
         </nav>
        </div>

    </header>

    </>
    
  )
}

export default Nav;