import Image from "next/image"
import { styleScript } from "../fontConst"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-16">
      <div className="flex justify-evenly w-1/3 mb-4">
        <Image src="/images/instagram.png" alt="socials" className="w-8" />
        <Image src="/images/github.png" alt="socials" className="w-8" />
        <Image src="/images/facebook.png" alt="socials" className="w-8" />
        <Image src="/images/twitter.png" alt="socials" className="w-8" />
      </div>
      <p className={(styleScript.className) + " p-4 text-center text-xl bg-gradient-to-t from-navbar-color-from w-full"}>Copyright of Swagnik Das @{new Date().getFullYear()}</p>
    </footer>
  )
}
