import{Great_Vibes} from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import logo from "../app/media/Foodtuck.png"
import arw from "../app/media/Project Status.png"
import { SlArrowDown } from "react-icons/sl";
import dot from "../app/media/Ellipse 33.png"
import { SlMagnifier } from "react-icons/sl";
import { PiHandbagLight } from "react-icons/pi";
import line from "../app/media/Line 11.png"
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import dshmn from "../app/media/Image.png"
import abtus1 from "../app/media/aboutus1.png"
import abtus2 from "../app/media/aboutus2.png"
import abtus3 from "../app/media/aboutus3.png"
import fdc from "../app/media/Image box.png"
import leaf from "../app/media/unsplash_INjdgkCwHp0.png"
import grd1 from "../app/media/grid1.png"
import grd2 from "../app/media/grid2.png"
import grd3 from "../app/media/grid3.png"
import grd4 from "../app/media/grid4.png"
import grd5 from "../app/media/grid5.png"
import grd6 from "../app/media/grid6.png"
import box from "../app/media/Icxon box.png"
import expnce from "../app/media/exp+30.png"
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookie } from "react-icons/pi";
import { PiWine } from "react-icons/pi";
import client from "../app/media/Clients.png"
import menu1 from "../app/media/menu1.png"
import menu2 from "../app/media/menu2.png"
import menu1_1 from "../app/media/menu1-1.png"
import menu1_2 from "../app/media/menu1-2.png"
import menu1_3 from "../app/media/menu1-3.png"
import menu1_4 from "../app/media/menu1-4.png"
import menu2_1 from "../app/media/menu2-1.png"
import menu2_2 from "../app/media/menu2-2.png"
import menu2_3 from "../app/media/menu2-3.png"
import menu2_4 from "../app/media/menu2-4.png"
import chef1 from "../app/media/Chef card.png"
import chef2 from "../app/media/Card 2.png"
import chef3 from "../app/media/Chef Card 1.png"
import chef4 from "../app/media/Card 4.png"
import leaf2 from "../app/media/rleaf.png"
import test from "../app/media/Testimonials.png"
import vid from "../app/media/vid.png"
import play from "../app/media/Play.png"
import blogpst1 from "../app/media/Blog Card 1.png"
import blogpst2 from "../app/media/Blog Card 3.png"
import blogpst3 from "../app/media/Blog Card 2.png"
import Footer from "./components/Footer/page";
import leafftr from "../app/media/Rectangle 8925.png"
import Head from "next/head";





export default function Home() {
  return (
    <div className="body">
<div>
  <center>
  <img src={logo.src} alt="" className="logo mt-10" />
  </center>
  <nav className="nav flex text-white font-sans absolute">
    <Link href="/" className="pr-8">Home <img src={dot.src} alt="" className="ml-4"/></Link>
    <Link href="/Menu" className="mr-8">Menu</Link>
    <Link href="/Blogpage" className="mr-8">Blog</Link>
    <Link href="/Pages" className="mr-8">Pages</Link>
    <SlArrowDown  className="arw ml-12 mt-2"/>
    <Link href="/Aboutus" className="drpdwn mr-8 absolute">About </Link> 
    <Link href="/Shoplist" className="ml-6">Shop</Link>
    <Link href="/Contactus" className="ml-8">Contact</Link>
  <input type="search" placeholder="Search..." className="search" /> <SlMagnifier  className="mg"/>
  <PiHandbagLight  className="bg mt-1.5"/>
  </nav>
</div>

<div className="mt-40">
  <img src={dshmn.src} alt="" width={650} height={550} className="mainfd absolute" />
  <p className="tm1 font-greatvibes text-[#FF9F0D] pl-52 absolute">Its Quick & Amusing!</p>
  <p  className="tm2 text-white font-semibold absolute pl-52"><span className=" font-semibold text-[#FF9F0D]">Th</span>e Art of speed <br />food Quality</p>
  <p className="mt3 text-white text-sm absolute pl-52">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Incidunt magnam praesentium enim molestias dolorem </p>
  <button className="sm absolute ml-52">See More</button>
     
{/* dont use layout just the function </Header> it will be easy */}

  <img src={line.src} alt=""  className="ml-40 mt-14"/>
  <Link href="#"><RiFacebookFill className="fb text-white mt-10"/></Link>
  <Link href="#"><FaTwitter className="twt text-yellow-700 mt-10" /></Link>
  <Link href="#"><FaPinterestSquare className="pn text-white mt-10"/></Link>
  <img src={line.src} alt=""className="ml-40 mt-10" />

</div>

<div className="about_us">
  <div>

  <img src={abtus1.src} alt="" width={660} height={330} className="abtimg1"/>
  <img src={abtus2.src} alt="" width={322} height={194} className="abtimg2 " />
  <img src={abtus3.src} alt="" width={322} height={194} className="abtimg3"/>
  </div>
  <p className="abtus font-greatvibes text-[#FF9F0D]">About us</p>
  <p className="abtustxt font-semibold font-geistsans text-white "> <span className="text-[#FF9F0D]">We</span> Create the best <br /> foody product</p>
  <p className="lorem text-white font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br /> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br /> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br />sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />consequat.</p>

  <ul className="abtuslst text-white font-extralight">
  <li className="list-">Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
    <li>Quisque diam pellentesque bibendum non dui volutpat fringilla </li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
  </ul>
  <button className="abtsm mt-0">See More</button>

</div>

<div className="mt-40">
  <p className="font-greatvibes text-[#FF9F0D] text-3xl ml-40 flex  justify-center">Food Category</p>
  <p className="font-semibold font-geistsans text-white text-4xl flex justify-center pt-4 ml-36"><span className=" text-[#FF9F0D]">Ch</span>oose Food Item</p>
  <img src={leaf.src} alt="" className="leaf absolute "/>
  <img src={fdc.src} alt="" width={1150} height={200} className="mt-14 ml-64"/>
</div>

<div>
  <div className="mt-44">
    <img src={grd1.src} alt="" className="grd1 ml-56 absolute" width={325} />
    <img src={grd2.src} alt="" className="grd2 absolute" width={281}/>
    <img src={grd3.src} alt="" className="grd3 absolute ml-56 " width={244} height={306}/>
    <img src={grd4.src} alt="" className="grd4 absolute" width={221}/>
    <img src={grd5.src} alt="" className="grd5 absolute" width={161}/>
    <img src={grd6.src} alt="" className="grd6 absolute" width={161}/>
  </div>

  <p className="gridtxt1 font-greatvibes text-[#FF9F0D] absolute" >Why Choose us</p>
  <p className="gridtxt2 font-semibold font-geistsans text-white absolute text-4xl"><span className="text-[#FF9F0D]">Ex</span>tra ordinary taste <br /> And Experienced </p>
  <p className="gridtxt3 font-extralight absolute text-white  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br /> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br /> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br />sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />consequat.</p>
  <img src={box.src} alt="" className="box absolute" /> 
  <PiHamburgerLight className="gridicn1 text-white absolute"/>
  <PiCookie className="gridicn2 text-white absolute m" />
  <PiWine className="gridicn3 text-white absolute" />

  <img src={expnce.src} alt="pic" className="exp absolute" width={300} height={100}/>
</div>

<div className="client">

<img src={client.src} alt="" />
</div>

<div className="mt-36 ">
  <p className="font-greatvibes text-3xl text-[#FF9F0D] flex justify-center">Choose & pick</p>
  <p className="font-semibold font-geistsans text-white text-4xl flex justify-center pt-5"><span className="text-[#FF9F0D]">Fr</span>om Our Menu</p>
 
  <ul className="font-inter text-white flex font-semibold text-xl justify-center mt-12">

  <Link href="" className="menu-lnks text-[#FF9F0D] ">Breakfast</Link>
  <Link href="" className="menu-lnks">Lunch</Link>
  <Link href="" className="menu-lnks">Dinner</Link>
  <Link href="" className="menu-lnks">Dessert</Link>
  <Link href="" className="menu-lnks">Drink</Link>
  <Link href="" className="menu-lnks">Snack</Link>
  <Link href="" className="menu-lnks">Suops</Link>
  </ul>

  <img src={menu1.src} alt=""  className="dish absolute mt-24" width={340}/>
  <img src={menu2.src} alt="" width={450} className="mt-24 absolute ml-72" />

  <div className="menu_1">
    <Link href=""> <img src={menu1_1.src} alt="" width={310} className="m1_1 mt-5 absolute"/></Link>
    <Link href=""> <img src={menu1_2.src} alt="" width={310} className="m1_2 mt-28 absolute"/></Link>
    <Link href=""> <img src={menu1_3.src} alt="" width={310} className="m1_3 absolute"/></Link>
    <Link href=""> <img src={menu1_4.src} alt="" width={310} className="m1_4 mt-6 absolute"/></Link>
  </div>
  <div className="menu_2">
    <Link href=""><img src={menu2_1.src} alt="" width={310} className="mt-5 absolute"/></Link>
    <Link href=""><img src={menu2_2.src} alt="" width={310} className="m2_2 mt-6 absolute"/></Link>
    <Link href=""><img src={menu2_3.src} alt="" width={310} className="m2_3 mt-6 absolute"/></Link>
    <Link href=""><img src={menu2_4.src} alt="" width={310} className="m2_4 mt-6 absolute"/></Link>
  </div>
</div>



<div className="chefs ">
  <p className="font-greatvibes text-[#FF9F0D] text-3xl flex justify-center">Chefs</p>
  <p className="font-semibold flex font-geistsans text-white text-4xl justify-center pt-5"><span className="text-[#FF9F0D]">Me</span>et Our Chef</p>
   <img src={leaf2.src} alt="" className="rleaf absolute" />
  <div className="flex justify-center mt-12">
  <img src={chef1.src} alt="" width={280} />
  <img src={chef2.src} alt="" width={280} className="pl-6"/>
  <img src={chef3.src} alt="" width={280} className="pl-6"/>
  <img src={chef4.src} alt="" width={280} className="pl-6"/>

  </div>
  <button className="seemorechef font-inter ">See More</button>
</div>
<div className="flex justify-center mt-24">
  <img src={test.src} alt="" width={1000}/>
</div>

<div className="mt-24">
  <p className="vidtxt1 font-greatvibes absolute text-3xl text-[#FF9F0D]">Restaurant Active Process</p>
  <p className="vidtxt2 font-semibold flex font-geistsans text-white absolute"><span className="we text-[#FF9F0D] absolute">We </span>  Document Every Food</p>
  <p className="vidtxt_2 font-semibold flex font-geistsans text-white absolute text-2xl"> Bean Process untile it is saved</p>
  <p className="vidtxt3 text-white font-inter absolute font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque <br /> 
  <span className="ml-24">bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </span></p>
  <button className="rm absolute">Readmore</button>
  <Link href="" className="play absolute"><img src={play.src} alt="" className="playimg"/></Link>
  <span className="playtxt absolute text-white font-inter font-bold">Play Video</span>
  <img src={vid.src} alt=""  />
</div>


<div className="mt-24">
  <p className="font-greatvibes text-[#FF9F0D] text-3xl flex justify-center">Blog Post</p>
  <p className="font-semibold flex font-geistsans text-white text-4xl justify-center pt-5"> <span className=" text-[#FF9F0D]">La </span>test News & Blog</p>

  <div className="flex justify-center mt-14">
  <img src={blogpst1.src} alt="" width={355} className="pl-5"/>
  <img src={blogpst2.src} alt="" width={355} className="pl-5"/>
  <img src={blogpst3.src} alt="" width={355} className="pl-5"/>
  </div>
</div>

<img src={leafftr.src} alt="" className="ftrleaf"/>

<Footer/>

    </div>
  );
}