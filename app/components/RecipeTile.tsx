import Link from "next/link"
import { styleScript, oleoScript, dongle } from "../fontConst"
import Image from "next/image"

export default function RecipeTile(props: Recipe) {
    return (
        <div className={(dongle.className) + " rounded-lg bg-category-tile m-8 p-8 flex justify-evenly text-3xl items-center"}>
            <Image src="/images/indian_cuisine.jpeg" className="w-40 h-40 rounded-full" alt="" />
            <div className="w-3/4">
                <div className="flex justify-evenly items-center mb-4">
                    <p className={(oleoScript.className) + " text-4xl"}>{props.label}</p>
                    <p>Serves:{props.yield}</p>
                    {props.mealType.map(i => <p key={i}>{i}</p>)}
                </div>
                <p>Ingredients List:</p>
                <div className="mb-4">{"i"}</div>
                <div className="flex justify-evenly items-center">
                    <p>Calories: {props.calories}</p>
                    <p>Time: {props.totalTime}</p>
                    <div className="border bg-button-color drop-shadow-3xl rounded-lg text-3xl">
                        <Link href='/recipe' className="w-full pr-8 pl-8 pt-4 pb-4">{"Let's Cook"}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
