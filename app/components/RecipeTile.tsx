import Link from "next/link"
import { styleScript, oleoScript, dongle } from "../fontConst"

export default function RecipeTile() {
    return (
        <div className={(dongle.className) + " rounded-lg bg-category-tile m-8 p-8 flex justify-evenly text-3xl items-center"}>
            <img src="/images/indian_cuisine.jpeg" className="w-40 h-40 rounded-full" />
            <div className="w-3/4">
                <div className="flex justify-evenly items-center mb-4">
                    <p className={(oleoScript.className) + " text-4xl"}>Butter Chicken</p>
                    <p>Serves: 4</p>
                    <p>Main Course/ Lunch/ Dinner</p>
                </div>
                <p>Ingredients List:</p>
                <p className="mb-4">Chicken, Dahi, Onion, Lal Mirchi powder, Haldi, Garam Masala, Sugar</p>
                <div className="flex justify-evenly items-center">
                    <p>Calories: 200Kcal</p>
                    <p>Time: 40 min</p>
                    <div className="border bg-button-color drop-shadow-3xl rounded-lg text-3xl">
                        <Link href='/recipe' className="w-full pr-8 pl-8 pt-4 pb-4">Let's Cook</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
