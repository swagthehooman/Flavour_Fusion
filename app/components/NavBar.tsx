import Link from "next/link";
import { oleoScript, styleScript } from "../fontConst";

export default function NavBar(){
    return (
        <nav className="flex justify-between w-full bg-gradient-to-b from-navbar-color-from pt-8 pb-8 pr-16 pl-16">
            <div>
                <Link href='/' className={"text-4xl font-normal cursor-pointer "+(styleScript.className)}>Flavour Fusion</Link>
            </div>
            <div className={"flex justify-between items-center text-base w-1/3 "+(oleoScript.className)}>
                <Link className="cursor-pointer" href='/'>Home</Link>
                <Link className="cursor-pointer" href='/'>About Us</Link>
                <Link className="cursor-pointer" href='/'>Recipies</Link>
                <Link className="cursor-pointer" href='/'>Contact Us</Link>
            </div>
        </nav>
    )
}