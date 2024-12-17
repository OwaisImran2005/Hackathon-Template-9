import Header from "../components/Header/page"
import Footer from "../components/Footer/page"
import bac from "../media/Background.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import abtus1 from "../media/abtus1.png"
import abtustxt from "../media/abtustxt.png"
import wcu from "../media/WCU.png"
import tm from "../media/Team Member.png"
import tst from "../media/abtustest.png"
import men from "../media/menuabtus.png"
import Image from "next/image";


export default function Aboutus(){

    return(
        <div>
        <Header/> 
        <div className="">
                <p className="bactxt absolute font-geistsans text-5xl text-white font-semibold pt-28">About us</p>
                <p className="bactxt2 absolute font-inter text-lg text-white flex">Home <MdKeyboardArrowRight className="arr absolute ml-14" /></p>
                <p className="bactxt3 absolute font-inter text-lg text-[#FF9F0D] ">About us</p>
                <Image src={bac.src} alt="" width={1680}/>
            </div>
          
        <div className="ml-60 mt-24">
            <Image src={abtus1.src} alt="" width={500} className="absolute"/>
            <Image src={abtustxt.src} alt="" width={430} className="abtusxt"/>
        </div>
        <div className="flex justify-center mt-12 ">
            <Image src={wcu.src} alt="" width={1100} className="wcu"/>
        </div>

        <div>
            <Image src={tm.src} alt="" width={1670} className="mt-24"/>
        </div>

       <div className="flex justify-center mt-12">
        <Image src={tst.src} alt="" width={1000} className="" />
        </div>        
   
        <div className="flex justify-center mt-20">
        <Image src={men.src} alt="" width={1050}  />
        </div>  

<Footer/>
        </div>
    )
}
