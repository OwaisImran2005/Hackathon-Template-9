import Header from "../components/Header/page"
import bac from "../media/Background.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/Footer/page";
import shp1 from "../media/shop1.png"
import shp2 from "../media/shop_2.png"
import Image from "next/image";


export default function Shop(){
    return(
        <div>
         <Header/>

         <div className="">
                <p className="bactxt absolute font-geistsans text-5xl text-white font-semibold pt-28">Our Shop</p>
                <p className="bactxt2 absolute font-inter text-lg text-white flex">Home <MdKeyboardArrowRight className="arr absolute ml-14" /></p>
                <p className="bactxt3 absolute font-inter text-lg text-[#FF9F0D] ">Shop</p>
                <Image src={bac.src} alt="" width={1680}/>
            </div>

            <div className="shop1 mt-24 ">
    <Image src={shp1.src} alt="" width={730}/>
</div>

<div className="sidebar3">
    <Image src={shp2.src} alt="" className="" width={320} />
</div>

     <Footer/>

        </div>
    )
}
