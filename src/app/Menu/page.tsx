import Header from "../components/Header/page"
import bac from "../media/Background.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import men1 from "../media/vegmen.png"
import vegtxt1 from "../media/Component 49.png"
import vegtxt2 from "../media/Component 50.png"
import vegtxt3 from "../media/Component 51.png"
import vegtxt4 from "../media/Component 52.png"
import menu2 from "../media/menu_2.png"
import menu3 from "../media/Clients.png"
import menu4 from "../media/menu4.png"
import menu5 from "../media/menu5.png"
import logomenu from "../media/Logo_menu.png"
import Footer from "../components/Footer/page"
import Image from "next/image";



export default function Menu (){

    return(
        <div>
            <Header/>
            <div className="flex">
                <p className="bactxt absolute font-geistsans text-5xl text-white font-semibold pt-28 ">Our Menu</p>
                <p className="bactxt2 absolute font-inter text-lg text-white flex">Home <MdKeyboardArrowRight className="arr absolute ml-14" /></p>
                <p className="bactxt3 absolute font-inter text-lg text-[#FF9F0D] ">Menu</p>
                <Image src={bac.src} alt="" width={1680}/>
            </div>


<div>
    <Image src={men1.src} alt="" width={380} className="ml-60 mt-24 absolute"/>
        
    <div className="dshtxt">
        <p className="absolute font-geistsans text-4xl mt-8 font-semibold">Starter Menu</p>
        <div className="dshtxt2">

    <Image src={vegtxt1.src} alt="" width={600} className="mt-4"/>
    <Image src={vegtxt2.src} alt="" width={600} className="mt-4"/>
    <Image src={vegtxt3.src} alt="" width={600} className="mt-4"/>
    <Image src={vegtxt4.src} alt="" width={600} className="mt-4"/>
        </div>
    </div>
</div>

<div className="Menu_2">
<Image src={menu2.src} alt="" width={1100} />
</div>

<div className="Menu_3">

<Image src={menu3.src} alt="" />
</div>

<div className="Menu_4">
    <Image src={menu4.src} alt="" width={1100} />
</div>

<div className="Menu_5">
    <Image src={menu5.src} alt="" width={1100} />
</div>

<div>
    <p className="font-inter text-lg font-extralight flex justify-center pt-24">Partners & Clients</p>
    <p className="font-geistsans text-[#333333] text-3xl font-semibold flex justify-center pt-4">We work with the best pepole</p>
    <Image src={logomenu.src} alt="" width={1100} className="pt-14 ml-60" />
</div>

<Footer/>
{/* <div className="arrange"></div> */}
        </div>
    )
}
