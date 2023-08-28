import RecipeInfoCard from "../components/RecipeInfoCard"
import { styleScript, dongle, oleoScript } from "../fontConst"
export default function Recipe() {
    return (
        <section className="flex justify-between mr-16 ml-16 mt-4 mb-8">
            <div className="w-3/5">
                <p className={(styleScript.className) + " text-5xl font-bold mb-8 p-16"}>Butter Chicken</p>
                <p className={(oleoScript.className) + " text-3xl mb-8"}>Recipe:</p>
                <div className={(dongle.className) + " text-3xl ml-6"}>
                    <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis fugit, laudantium reiciendis dolor deleniti ab quos saepe in, ad explicabo, suscipit molestiae error perferendis exercitationem inventore ratione illo atque.</p>
                    <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis fugit, laudantium reiciendis dolor deleniti ab quos saepe in, ad explicabo, suscipit molestiae error perferendis exercitationem inventore ratione illo atque.</p>
                    <p>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis fugit, laudantium reiciendis dolor deleniti ab quos saepe in, ad explicabo, suscipit molestiae error perferendis exercitationem inventore ratione illo atque.</p>
                    <p>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis fugit, laudantium reiciendis dolor deleniti ab quos saepe in, ad explicabo, suscipit molestiae error perferendis exercitationem inventore ratione illo atque.</p>
                    <p>5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis fugit, laudantium reiciendis dolor deleniti ab quos saepe in, ad explicabo, suscipit molestiae error perferendis exercitationem inventore ratione illo atque.</p>
                </div>
            </div>

            <RecipeInfoCard />
        </section>
    )
}
