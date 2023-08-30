export default async function getByCuisine(key: string, value: string | null) {
    const cuisinesRes = await fetch(`https://api.edamam.com/api/recipes/v2/?&type=public&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&${key}=${value}`)

    if (!cuisinesRes.ok) {
        return new Error("Error encountered during fetch");
    }
    console.log(cuisinesRes.json())
    return cuisinesRes.json();
}
