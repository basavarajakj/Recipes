export interface Recipe {
	uri: string;
	label: string;
	image: string;
	totalTime: number;
}

export interface RecipeCards {
	recipe: Recipe;
}