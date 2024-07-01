interface RecipeCollection {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const printRecipes = () => {
  fetch("https://dummyjson.com/recipes")
    .then((rawResponse: Response) => rawResponse.json())
    .then((jsonBody: RecipeCollection) =>
      jsonBody.recipes.forEach((r) => {
        console.log(r.name);
      })
    )
    .catch(console.error);
};

export default printRecipes;
