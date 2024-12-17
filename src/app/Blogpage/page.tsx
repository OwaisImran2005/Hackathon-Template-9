import Header from "../components/Header/page"
import bac from "../media/Background.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import blog1 from "../media/Blog1.png"
import blog2 from "../media/Blog2.png"
import blog3 from "../media/Blog3.png"
import blog4 from "../media/Blog4.png"
import change from "../media/pagination.png"
import sidebr from "../media/Side ber.png"
import Footer from "../components/Footer/page";
import Image from "next/image";


export default function Blog(){
 
    return(
    <div>

<Header/>

            <div className="">
                <p className="bactxt absolute font-geistsans text-5xl text-white font-semibold pt-28">Blog page</p>
                <p className="bactxt2 absolute font-inter text-lg text-white flex">Home <MdKeyboardArrowRight className="arr absolute ml-14" /></p>
                <p className="bactxt3 absolute font-inter text-lg text-[#FF9F0D] ">Blog page</p>
                <Image src={bac.src} alt="" width={1680}/>
            </div>

<div className="blogs mt-16 ">
    <Image src={blog1.src} alt="" width={700} className="pt-10"/>
    <Image src={blog2.src} alt="" width={700} className="pt-10"/>
    <Image src={blog3.src} alt="" width={700} className="pt-10"/>
    <Image src={blog4.src} alt="" width={700} className="pt-10"/>
</div>

<div className="sidebar">
    <Image src={sidebr.src} alt="" className="absolute" />
</div>

<div>
    <Image src={change.src} alt="" className="change" />
</div>



<Footer/>


    </div>
    )
}
