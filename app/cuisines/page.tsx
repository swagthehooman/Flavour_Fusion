import CuisineCard from "../components/CuisineCard";
import { styleScript } from "../fontConst";

export default function CuisineSelectionPage() {

    return <section className="mr-16 ml-16 mt-4 mb-8">
        <p className={(styleScript.className) + " text-5xl"}>Choose your poison</p>
        <div className="grid grid-cols-3 gap-8 mt-8 mb-16">
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
        </div>
        <p className={(styleScript.className) + " text-5xl"}>Or would you prefer search by?</p>
        <div className="grid grid-cols-3 gap-8 mt-6 mb-8">
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
            <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
                "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />
        </div>
    </section>
}