import { oleoScript, dongle } from "../fontConst"
export default function RecipeInfoCard() {
    return (
        <div className="bg-category-tile w-1/4 pl-16 p-8 h-[40%] flex flex-col justify-between rounded-lg relative">
            <div className={(oleoScript.className) + " text-xl mb-8"}>
                <p>Serves: 4</p>
                <p>Time: 40 mins</p>
                <p>Calories: 200 Kcal</p>
            </div>
            <img src="/images/indian_cuisine.jpeg" alt="picture" className="rounded-full w-60 h-60 absolute -left-[60%]" />
            <div>
                <p className={(oleoScript.className) + " text-2xl mb-4"}>Ingredients</p>
                <p className={(dongle.className) + " text-2xl"}>Chowmein<br />
                    Chicken<br />
                    Chilly<br />
                    Soy sauce<br />
                    Chilli sauce<br />
                    Vinegar<br />
                    Green Pepper<br />
                </p>
            </div>
        </div>
    )
}
