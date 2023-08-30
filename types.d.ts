type cuisineType = {
  title: string,
  description: string[],
  image: string,
  query: string
}

type Recipe={
  label: string,
  uri: string,
  image: string,
  ingredients: string[
    {
      text: string,
      quantity: number,
      measure: string,
    }
  ],
  ingredientsLine: string[],
  calories: number,
  cuisineType: string[],
  mealType: string[],
  instructions: string[],
  yield: number,
  totalTime: number

}