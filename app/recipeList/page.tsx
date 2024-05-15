'use client'
import { styleScript } from "../fontConst"
import RecipeTile from "../components/RecipeTile"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import recipe from '../api/recipe.json';

export default function RecipeList({ cuisineRes }: any) {

    const params = useSearchParams()
    const key = params.has('cuisineType') ? 'cuisineType' : params.has('mealType') ? 'mealType' : 'dishType'
    const value = params.get(key)

    const [recipeData, setRecipeData] = useState<any[]>([])

    async function getRecipies() {
        //         const res = await fetch(`https://api.edamam.com/api/recipes/v2/?&type=public&app_id=284a43fd&app_key=8873a91af0b9243e1a8bbbad2331f1cc
        // &${key}=${value}`)
        //         const resData = await res.json();
        //         setRecipeData(resData.hits)
        //         console.log(resData.hits[0].recipe)
        setRecipeData(recipe);
    }

    useEffect(() => {
        getRecipies()
    }, [])

    return (
        <section className="ml-16 mr-16 mt-4">
            <p className={(styleScript.className) + " text-5xl"}>{`${value} cuisine`}</p>
            {recipeData.map(i => <RecipeTile calories={i.recipe.calories} cuisineType={i.recipe.cuisineType} image={""} ingredients={i.recipe.ingredients} ingredientsLine={i.recipe.ingredientsLine} instructions={i.recipe.instructions} label={i.recipe.label} mealType={i.recipe.mealType} totalTime={i.recipe.totalTime} uri={i.recipe.uri} yield={i.recipe.yield} key={i.recipe.uri} />)}
        </section>
    )
}
