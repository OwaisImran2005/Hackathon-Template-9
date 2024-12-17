import Link from "next/link"
import { MdEmail } from "react-icons/md"
import style from "../Footer/page.module.css"
import line from "../../media/Vector 17.png"
import watch from "../../media/Watch.png"
import ftr1 from "../../media/Resent post cadr 1.png"
import ftr2 from "../../media/Resent post cadr 2.png"
import ftr3 from "../../media/Resent post cadr 3.png"
import leaf from "../../media/Rectangle 8925.png"
import logo from "../../media/logoftr.png"

export default function Footer (){

    return(
        <div className="Footer mt-28 bg-black">

            <p className="font-semibold font-geistsans text-white text-3xl ml-64 absolute pt-10"><span className="text-[#FF9F0D]">St</span>ill You Need Our Support ?</p>
            <p className="font-inter text-white font-light ml-64 pt-24 absolute">Don’t wait make a smart & logical quote here. Its pretty easy.</p>

            <div className={style.emlbtn}>
            <input type="email" name="" id="" placeholder="Enter Your Email" className={style.email}/>
            <button className={style.btn} >Subscribe</button>
            </div>

            <img src={line.src} alt="" className="mt-28 ml-60 absolute"/>
<div className="absolute">
            <p className="font-geistsans text-white text-2xl ml-44 mt-44 font-semibold">About Us.</p>
            <p className="ftr_abt2 font-inter text-white font-extralight ml-40 pt-8">orporate clients and leisure travelers has <br />
been relying on Groundlink for dependab <br />
safe, and professional chauffeured car <br />
service in major cities across World.</p>
            <img src={watch.src} alt="" width={68} className="mt-7 ml-44"/>
            <p className="ftrwct2 text-white font-extralightlight">Opening Houres <br />
Mon - Sat(8.00 - 6.00) <br />
Sunday - Closed</p>

</div>
            <p className="ftrlnks1 font-geistsans text-2xl text-white font-semibold ">Useful Links</p>

            <nav className="ftrlnks2 text-white font-inter font-extralight absolute">

              <Link href="/Aboutus" className="lnks2">About</Link>  <br />
              <Link href="/" className="lnks2">News</Link>  <br />
              <Link href="/Aboutus" className="lnks2">Partners</Link>  <br />
              <Link href="/" className="lnks2">Team</Link>  <br />
              <Link href="/Menu" className="lnks2">Menu</Link>  <br />
              <Link href="/Contactus" className="lnks2">Contacts</Link>  
            </nav>

            <p className="ftrlnks3 font-geistsans text-2xl text-white font-semibold">Help?</p>
           
           <nav className="ftrlnks4 text-white font-inter font-extralight absolute">
            
              <Link href="/FAQpage" className="lnks2">FAQ</Link>  <br />
              <Link href="/" className="lnks2">Term & conditions</Link><br />  
              <Link href="/" className="lnks2">Reporting</Link>  <br />
              <Link href="/" className="lnks2">Documentation</Link>  <br />
              <Link href="/" className="lnks2">Support Policy</Link>  <br />
              <Link href="/" className="lnks2">Privacy</Link>  

            </nav>
            <div>

<p className="ftr5 font-geistsans text-2xl text-white font-semibold">Recent Post</p>
<div className="ftr6">

<img src={ftr1.src} alt="" className="pt-16" />
<img src={ftr2.src} alt="" className="pt-3"/>
<img src={ftr3.src} alt="" className="pt-3"/>
</div>

            </div>
<div className={style.cpyrght_logo}>
    <p className="text-white font-inter font-light font-lg pt-7 pl-16">Copyright © 2024 by Muhammad Owais . All Rights Reserved.</p>
    <img src={logo.src} alt="" className={style.logoftr}/>
</div>

        </div>

        
    )
}