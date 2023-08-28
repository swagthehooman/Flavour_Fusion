import Link from "next/link"
import { oleoScript, styleScript } from "../fontConst"

export default function CuisineCard(props: cuisineType) {
  return (
    <div className="pt-8 pl-8 pr-8 pb-4 text-left relative w-[70%] bg-category-tile rounded-lg">
      <div>
        <p className={(styleScript.className) + " text-3xl mb-2 text-center"}>{props.title} Cuisine</p>
        <p className={(oleoScript.className)}>{props.description[0]}<br />{props.description[1]}<br />{props.description[2]}</p>
      </div>
      <Link href={props.link}>
        <img src="/images/arrow.png" alt="browse" className="w-10 bg-button-color mt-4 rounded-full cursor-pointer" />
      </Link>
      <img src={props.image} alt="cuisine picture" className="w-32 h-32 rounded-full absolute top-12 -right-[12%] " />
    </div>
  )
}
