import Link from "next/link"
import logo from "../../media/Foodtuck.png"
import style from "../Header/page.module.css"
import { SlMagnifier } from "react-icons/sl";
import { LuUserRound } from "react-icons/lu";
import { PiHandbagLight } from "react-icons/pi";

export default function Header() {

    return (
        <div className="">

            <div className={style.header}>
            

                <p className="font-semibold font-geistsans text-white text-2xl ml-60 pt-6">Food<span className="text-[#FF9F0D]">tuck</span></p>

                <ul className="hdr font-inter text-white flex justify-center">
                    <Link href="/" className="lnks ">Home</Link>
                    <Link href="/Menu" className="lnks ml-8">Menu</Link>
                    <Link href="/Blogpage" className="lnks ml-8">Blog</Link>
                    <Link href="/Pages" className="lnks ml-8">Pages</Link>
                    <Link href="/Aboutus" className="lnks ml-8">About </Link>
                    <Link href="/Shoplist" className="lnks ml-8">Shop</Link>
                    <Link href="/Contactus" className="lnks ml-8">Contact</Link>
                </ul>

                <div className="header_logo flex">

                    <Link href=""><SlMagnifier className={style.magh} /></Link>
                    <Link href="/Signin"><LuUserRound className={style.user} />
                    </Link>
                    <Link href=""><PiHandbagLight className={style.cart} /></Link>
                </div>

            </div>
        </div>
    )
}