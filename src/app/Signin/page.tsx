import Header from "../components/Header/page"
import bac from "../media/Background.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/Footer/page";
import or from "../media/or.png"
import gle from "../media/google.png"
import aple from "../media/apple.png"
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineLock } from "react-icons/md";





export default function Signin(){
    return(
        <div>
         <Header/>

         <div>
                <p className="bactxt absolute font-geistsans text-5xl text-white font-semibold pt-28">Sign in</p>
                <p className="bactxt2 absolute font-inter text-lg text-white flex">Home <MdKeyboardArrowRight className="arr absolute ml-14" /></p>
                <p className="bactxt3 absolute font-inter text-lg text-[#FF9F0D] ">Sign in</p>
                <img src={bac.src} alt="" width={1680}/>
        </div>

      <div className="signin text-black mt-36">
        <p className="text-xl font-geistsans font-semibold pl-8 pt-8">Sign in</p>
        <div className="mt-5">

        <TfiEmail className="absolute mt-6 ml-8 text-xl"/>
         <input className="suit" type="email" placeholder="Email" /> <br />
        <input className="suit" type="text" placeholder="Password" /> <br />
        <MdOutlineLock className="absolute -mt-6 ml-8 text-xl" />
<input className="ml-20 mt-5" type="checkbox" /><p className="absolute -mt-6 ml-24 text-sm">Remember me?</p>
        <button className="sgnp">Sign up</button>
        <p className="text-sm text-gray-500 ml-64 mt-20">Forget password?</p>
        </div>
        <img src={or.src} alt="" className="mt-5 ml-9"/>
        <Link href="/"><img src={gle.src} alt=""  className="ml-10 pt-3"/></Link>
        <Link href="/"><img src={aple.src} alt="" className="ml-10 pt-3"/></Link>
      </div>
   

   <Footer/>

        </div>
        )}