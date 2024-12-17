import Header from "../components/Header/page"
import bac from "../media/Background.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import blogdtls from "../media/Left ber.png"
import sidebr from "../media/Side ber.png"
import Footer from "../components/Footer/page";
import Image from "next/image";


export default function Pages(){
 
    return(
    <div>

<Header/>

            <div className="">
                <p className="bactxt absolute font-geistsans text-5xl text-white font-semibold pt-28">Blog details</p>
                <p className="bactxt2 absolute font-inter text-lg text-white flex">Home <MdKeyboardArrowRight className="arr absolute ml-14" /></p>
                <p className="bactxt3 absolute font-inter text-lg text-[#FF9F0D] ">Blog details</p>
                <Image src={bac.src} alt="" width={1680}/>
            </div>

<div className="blogdtls mt-24 ">
    <Image src={blogdtls.src} alt="" width={700}/>
</div>

<div className="sidebar2">
    <Image src={sidebr.src} alt="" className="" />
</div>

<Footer/>
    </div>
    )
}
