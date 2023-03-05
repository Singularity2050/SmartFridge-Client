export const rows = [
	{
		id: 1,
		item: 'apples',
		quantity: 4,
		exp: '3/10/2023',
	},
	{
		id: 2,
		item: 'bananas',
		quantity: 2,
		exp: '3/6/2023',
	},
	{
		id: 3,
		item: 'potatos',
		quantity: 8,
		exp: '3/13/2023',
	},
	{
		id: 4,
		item: 'carrots',
		quantity: 4,
		exp: '3/15/2023',
	},
	{
		id: 5,
		item: 'pears',
		quantity: 5,
		exp: '3/9/2023',
	},
	{
		id: 6,
		item: 'eggplant',
		quantity: 2,
		exp: '3/13/2023',
	},
	{
		id: 7,
		item: 'cabbage',
		quantity: 2,
		exp: '3/19/2023',
	},
];

export const receipt = [
	{ itemName: 'milk', quantity: '1 gallon', expirationDate: '2023-03-13' },
	{
		itemName: 'cottage cheese',
		quantity: '16 oz',
		expirationDate: '2023-03-18',
	},
	{
		itemName: 'natural yogurt',
		quantity: '32 oz',
		expirationDate: '2023-03-22',
	},
	{ itemName: 'bananas', quantity: 6, expirationDate: '2023-03-10' },
	{ itemName: 'aubergine', quantity: 2, expirationDate: '2023-03-17' },
	{
		itemName: 'cheese crackers',
		quantity: '12 oz',
		expirationDate: '2023-04-01',
	},
	{
		itemName: 'chocolate cookies',
		quantity: '16 oz',
		expirationDate: '2023-03-25',
	},
	{ itemName: 'canned tuna', quantity: '5 oz', expirationDate: '2023-03-15' },
	{
		itemName: 'chicken breast',
		quantity: '1 lb',
		expirationDate: '2023-03-20',
	},
	{ itemName: 'toilet paper', quantity: '12 rolls', expirationDate: null },
	{ itemName: 'baby wipes', quantity: '72 count', expirationDate: null },
];

export const recipes = [
	bananaYogurtSmoothie,
	cottageCheeseAubergineSalad,
	tunaCheeseCrackers,
	chickenAubergineStirFry,
];

// Recipe 1: Banana Yogurt Smoothie
const bananaYogurtSmoothie = {
	foodName: 'Banana Yogurt Smoothie',
	ingredients: [
		{ itemName: 'bananas', quantity: '2 ripe' },
		{ itemName: 'natural yogurt', quantity: '1 cup' },
		{ itemName: 'milk', quantity: '1/2 cup' },
		{ itemName: 'honey', quantity: '1 tsp', notes: 'optional' },
	],
	instructions: [
		'Peel and slice the bananas and add them to a blender.',
		'Add the natural yogurt and milk to the blender and blend until smooth.',
		'If desired, add honey to taste and blend again.',
	],
};

// Recipe 2: Cottage Cheese and Aubergine Salad
const cottageCheeseAubergineSalad = {
	foodName: 'Cottage Cheese and Aubergine Salad',
	ingredients: [
		{ itemName: 'aubergine', quantity: '1 small' },
		{ itemName: 'cottage cheese', quantity: '1/2 cup' },
		{ itemName: 'olive oil', quantity: '2 tbsp' },
		{ itemName: 'salt', quantity: 'to taste' },
		{ itemName: 'pepper', quantity: 'to taste' },
	],
	instructions: [
		'Preheat the oven to 400°F.',
		'Cut the aubergine into small cubes and toss with 1 tbsp olive oil and salt and pepper to taste.',
		'Spread the aubergine cubes out on a baking sheet and roast in the oven for 20-25 minutes, until tender and lightly browned.',
		'Allow the aubergine to cool slightly, then combine with the cottage cheese and remaining olive oil.',
		'Serve and enjoy!',
	],
};

// Recipe 3: Tuna and Cheese Crackers
const tunaCheeseCrackers = {
	foodName: 'Tuna and Cheese Crackers',
	ingredients: [
		{ itemName: 'canned tuna', quantity: '1 can' },
		{ itemName: 'cheese crackers', quantity: '12 oz' },
	],
	instructions: [
		'Open the can of tuna and drain the liquid.',
		'Break the cheese crackers into small pieces and place them on a serving platter.',
		'Top each cracker with a small spoonful of tuna.',
		'Serve and enjoy!',
	],
};

// Recipe 4: Chicken and Aubergine Stir Fry
const chickenAubergineStirFry = {
	foodName: 'Chicken and Aubergine Stir Fry',
	ingredients: [
		{ itemName: 'chicken breast', quantity: '1 lb' },
		{ itemName: 'aubergine', quantity: '1 small' },
		{ itemName: 'olive oil', quantity: '2 tbsp' },
		{ itemName: 'salt', quantity: 'to taste' },
		{ itemName: 'pepper', quantity: 'to taste' },
	],
	instructions: [
		'Cut the chicken breast into small pieces and season with salt and pepper.',
		'Cut the aubergine into small cubes.',
		'Heat the olive oil in a large skillet over medium-high heat.',
		'Add the chicken and aubergine to the skillet and stir fry for 10-12 minutes, until the chicken is cooked through and the aubergine is tender.',
		'Serve and enjoy!',
	],
};
