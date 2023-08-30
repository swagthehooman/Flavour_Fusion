import CuisineCard from "../components/CuisineCard";
import { styleScript } from "../fontConst";
import data from '../api/data.json';

function cards(props: cuisineType) {
    return <CuisineCard key={props.image} title={props.title} description={props.description} image={props.image} query={props.query} />
}

export default function CuisineSelectionPage() {
    return <section className="mr-16 ml-16 mt-4 mb-8" >
        <p className={(styleScript.className) + " text-5xl"}>Choose your poison</p>
        <div className="grid grid-cols-3 gap-8 mt-8 mb-16">
            {data.cuisineType?.map(cards)}
        </div>
        <p className={(styleScript.className) + " text-5xl"}>Or would you prefer search by?</p>
        <div className="grid grid-cols-3 gap-8 mt-6 mb-16">
            {data.mealType?.map(cards)}
        </div>
        <p className={(styleScript.className) + " text-5xl"}>Something comforting perhaps?</p>
        <div className="grid grid-cols-3 gap-8 mt-6 mb-8">
            {data.dishType?.map(cards)}
        </div>
    </section >
}