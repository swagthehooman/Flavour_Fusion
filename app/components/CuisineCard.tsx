import Link from "next/link"
import { oleoScript, styleScript } from "../fontConst"
import Image from "next/image"

export default function CuisineCard(props: cuisineType) {
  const [key, value] = props.query.split('=')
  return (
    <div className="pt-8 pl-8 pr-8 pb-4 text-left relative w-[70%] bg-category-tile rounded-lg">
      <div>
        <p className={(styleScript.className) + " text-3xl mb-2 text-center"}>{props.title}</p>
        <p className={(oleoScript.className)}>{props.description[0]}<br />{props.description[1]}<br />{props.description[2]}</p>
      </div>
      {key === "cuisineType" ? <Link href={{ pathname: '/recipeList', query: { cuisineType: `${value}` } }} >
        <Image src="/images/arrow.png" alt="browse" className="w-10 bg-button-color mt-4 rounded-full cursor-pointer" />
      </Link> : key === "mealType" ? <Link href={{ pathname: '/recipeList', query: { mealType: `${value}` } }} >
        <Image src="/images/arrow.png" alt="browse" className="w-10 bg-button-color mt-4 rounded-full cursor-pointer" />
      </Link> : <Link href={{ pathname: '/recipeList', query: { dishType: `${value}` } }} >
        <Image src="/images/arrow.png" alt="browse" className="w-10 bg-button-color mt-4 rounded-full cursor-pointer" />
      </Link>}
      <Image src={props.image} alt="cuisine picture" className="w-32 h-32 rounded-full absolute top-12 -right-[12%] " />
    </div>
  )
}
