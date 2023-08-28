import { styleScript } from "../fontConst"
import RecipeTile from "../components/RecipeTile"
export default function RecipeListPage() {
    return (
        <section className="ml-16 mr-16 mt-4">
            <p className={(styleScript.className) + " text-5xl"}>Indian Cuisine</p>
            <RecipeTile />
            <RecipeTile />
            <RecipeTile />
            <RecipeTile />
            <RecipeTile />
            <RecipeTile />
            <RecipeTile />
            <RecipeTile />
            <RecipeTile />
        </section>
    )
}
