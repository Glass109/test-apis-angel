export type Recipee = {
	uri: string;
	label: string;
	image: string;
	source: string;
	url: string;
	shareAs: string;
	yield: number;
	dietLabels: string[];
	healthLabels: string[];
	cautions: string[];
	ingredientLines: string[];
	ingredients: RecipeeIngredients[];
	calories: number;
	totalWeight: number;
	totalTime: number;
	cuisineType: string[];
	mealType: string[];
	dishType: string[];
	totalNutrients: any;
	totalDaily: RecipeeTotalDaily;
	digest: RecipeeDigest[];
}
export type RecipeeIngredients = {
	text: string;
	quantity: number;
	measure: string;
	food: string;
	weight: number;
	foodCategory: string;
	foodId: string;
	image: string;
}

export type RecipeeTotalDailyENERC_KCAL = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyFAT = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyFASAT = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyCHOCDF = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyFIBTG = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyPROCNT = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyCHOLE = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyNA = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyCA = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyMG = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyK = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyFE = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyZN = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyP = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyVITA_RAE = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyVITC = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyTHIA = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyRIBF = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyNIA = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyVITB6A = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyFOLDFE = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyVITB12 = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyVITD = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyTOCPHA = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDailyVITK1 = {
	label: string;
	quantity: number;
	unit: string;
}
export type RecipeeTotalDaily = {
	ENERC_KCAL: RecipeeTotalDailyENERC_KCAL;
	FAT: RecipeeTotalDailyFAT;
	FASAT: RecipeeTotalDailyFASAT;
	CHOCDF: RecipeeTotalDailyCHOCDF;
	FIBTG: RecipeeTotalDailyFIBTG;
	PROCNT: RecipeeTotalDailyPROCNT;
	CHOLE: RecipeeTotalDailyCHOLE;
	NA: RecipeeTotalDailyNA;
	CA: RecipeeTotalDailyCA;
	MG: RecipeeTotalDailyMG;
	K: RecipeeTotalDailyK;
	FE: RecipeeTotalDailyFE;
	ZN: RecipeeTotalDailyZN;
	P: RecipeeTotalDailyP;
	VITA_RAE: RecipeeTotalDailyVITA_RAE;
	VITC: RecipeeTotalDailyVITC;
	THIA: RecipeeTotalDailyTHIA;
	RIBF: RecipeeTotalDailyRIBF;
	NIA: RecipeeTotalDailyNIA;
	VITB6A: RecipeeTotalDailyVITB6A;
	FOLDFE: RecipeeTotalDailyFOLDFE;
	VITB12: RecipeeTotalDailyVITB12;
	VITD: RecipeeTotalDailyVITD;
	TOCPHA: RecipeeTotalDailyTOCPHA;
	VITK1: RecipeeTotalDailyVITK1;
}
export type RecipeeDigestSub = {
	label: string;
	tag: string;
	schemaOrgTag: string;
	total: number;
	hasRDI: boolean;
	daily: number;
	unit: string;
}
export type RecipeeDigest = {
	label: string;
	tag: string;
	schemaOrgTag: string;
	total: number;
	hasRDI: boolean;
	daily: number;
	unit: string;
	sub: RecipeeDigestSub[];
}

export type GymResult = {
	count: number;
	results: GymResultResults[];
}
export type GymResultResults = {
	id: number;
	uuid: string;
	name: string;
	exercise_base: number;
	description: string;
	created: string;
	category: number;
	muscles: number[];
	muscles_secondary: number[];
	equipment: number[];
	language: number;
	license: number;
	license_author: string;
	variations: number[];
	author_history: string[];
}