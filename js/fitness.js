//Resource:https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

const workoutTypes = ["cardio", "strength", "yoga"];
const cardioExercises = ["jogging", "cycling", "swimming"];
const strengthExercises = ["push ups", "pull ups", "squats"];
const yogaExercises = ["downward dog", "warrior I", "tree pose"];
const selectMuscles = document.getElementById("muscles");
const displayMuscles = document.getElementById("displayMuscleGroup");

//for the meal plan and calories
let weight = document.getElementById("weight");
let heightFt = document.getElementById("HeightFt");
let heightInch = document.getElementById("HeightInch");
let docAge = document.getElementById("age");
let activityDropdown = document.getElementById("activitySelect");
let healthDropdown = document.getElementById("healthSelect");
let goalDropdown = document.getElementById("goal");
let mealPlanDropdown = document.getElementById("mealPlanType");
let mealPlanButton = document.getElementById("generate-meal-plan-button");
let mealPlanDiv = document.getElementById("displayMealPlanAndCal");
let genderDropdown = document.getElementById("gender");
let form = document.getElementById("formMain");

//for the workout plan
const workType = document.getElementById("workOutType");
const workOutButton = document.getElementById("generate-workout-button");
const workOutDiv = document.getElementById("workout");

// arrays that contains the original versions of different meal plans
const mealPlans = [
  "vegan",
  "vegetarian",
  "pescatarian",
  "low carb",
  "high protein",
];
const veganMeals = ["Veggie burger", "Vegetable stir fry", "Vegan curry"];
const vegetarianMeals = [
  "Grilled cheese sandwich",
  "Vegetable lasagna",
  "Spinach and feta omelette",
];
const pescatarianMeals = [
  "Grilled salmon",
  "Shrimp and veggie stir fry",
  "Tuna salad sandwich",
];
const lowCarbMeals = [
  "Egg and spinach scramble",
  "Grilled chicken breast",
  "Shirataki noodles with vegetables",
];
const highProteinMeals = [
  "Steak and vegetables",
  "Grilled chicken with quinoa",
  "Tofu and vegetable stir fry",
];
//Ask the user the enter their workout preferences and the matched results will given out
//this function will get elements from the 'const' array
function generateWorkout() {
  let workout = "";
  let workoutType = workType.value;
  let workoutExercises;

  if (workoutType === "cardio") {
    workoutExercises = cardioExercises;
  } else if (workoutType === "strength") {
    workoutExercises = strengthExercises;
  } else if (workoutType === "yoga") {
    workoutExercises = yogaExercises;
  } else {
    workout = "";
  }

  workout += `Today's workout is ${workoutType}!\n`;
  workout += `Exercises: ${workoutExercises}`;
  return workout;
}

function generateMealPlan() {
  let mealPlan = "";
  let mealType = mealPlanDropdown.value;
  let mealOptions;

  if (mealType === "vegan") {
    mealOptions = veganMeals;
  } else if (mealType === "vegetarian") {
    mealOptions = vegetarianMeals;
  } else if (mealType === "pescatarian") {
    mealOptions = pescatarianMeals;
  } else if (mealType === "low carb") {
    mealOptions = lowCarbMeals;
  } else if (mealType === "high protein") {
    mealOptions = highProteinMeals;
  }

  mealPlan += `Today's meal plan is ${mealType}!\n`;
  mealPlan += `Meal options: ${mealOptions}`;
  return mealPlan;
}
//The World Health Organization (WHO) defines a healthy body mass index (BMI) as being between 18.5 and 24.9.
//Source: https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight
//The American Dietetic Association - https://www.weightwatchers.com/us/blog/food/acceptable-macronutrient-distribution-range
//They provide guidelines for macronutrient distribution ranges (MDR) and calorie intake for individuals.

// The Academy of Nutrition and Dietetics - https://www.andeal.org/category.cfm?cid=14
//They provide evidence-based nutrition practice guidelines for various health conditions and goals.

// The National Academy of Medicine - https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx
//They provide recommended daily allowances (RDAs) and adequate intake (AIs) for macronutrients and calories.

// The World Health Organization (WHO) - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1479724/
//They provide guidelines for macronutrient and calorie intake based on age, sex, and physical activity level.

/**
 * Function that creates a food plan based on a user's body weight, height, age, gender, activity level, health conditions, and goals
 * @param {number} weight - User's body weight in lbs
 * @param {number} Ft - User's height in feet
 * @param {number} Inch - plus inches
 * @param {number} age - User's age
 * @param {string} gender - User's gender: "male" or "female"
 * @param {string} activityLevel - User's activity level: "sedentary", "light", "moderate", "active", "very active"
 * @param {string} healthConditions - User's health conditions: "none", "diabetes", "hypertension", "cardiac issues"
 * @param {string} goal - User's goal: "lose weight" or "gain muscle"
 * @returns {string} - A string representing the food plan with number of calories, protein, carbs, and fats
 */
function createNutritionPlan(
  weight,
  Ft,
  Inch,
  age,
  gender,
  activityLevel,
  healthConditions,
  goal
) {
  let calories;
  let protein;
  let carbs;
  let fats;
  weight = weight * 0.453592; // convert lbs to kg for more accurate calculations
  let meters = Ft * 0.3048; //convert feet to meters
  meters += Inch * 0.0254; //convert inches to meters
  let height = meters; // keep the naming scheme

  let bmi = weight / (height * height); // calculate body mass index (BMI)

  //Calculate basal metabolic rate (BMR) based on user's gender, weight, height, and age
  //Harris-Benedict equation for BMR https://www.calculator.net/bmr-calculator.html?ctype=standard&cage=22&csex=m&cheightfeet=5&cheightinch=9&cpound=175&cheightmeter=180&ckg=60&cmop=0&coutunit=c&cformula=m&cfatpct=20&x=45&y=24
  let BMR;
  if (gender === "male") {
    //13.397W + 4.799H - 5.677A + 88.362
    BMR = 13.4 * weight + 4.8 * height - 5.7 * age + 88.362;
  } else {
    // 9.247W + 3.098H - 4.330A + 447.593
    BMR = 9.2 * weight + 3.1 * height - 4.3 * age + 337.593;
  }

  //Calculate total daily energy expenditure (TDEE) based on BMR and activity level
  let TDEE;
  if (activityLevel === "sedentary") {
    TDEE = BMR * 2.0; // these values may not be accurate for everybody
  } else if (activityLevel === "light") {
    TDEE = BMR * 2.175;
  } else if (activityLevel === "moderate") {
    TDEE = BMR * 2.35;
  } else if (activityLevel === "active") {
    TDEE = BMR * 2.525;
  } else if (activityLevel === "very active") {
    TDEE = BMR * 2.7;
  } else {
    TDEE = BMR * 2.0;
  }

  //Adjust TDEE based on user's goal and health conditions
  if (goal == "Lose Weight") {
    TDEE -= 100; //these values may be inaccurate
  } else if (goal == "Gain Muscle") {
    TDEE += 400;
  }
  if (
    healthConditions === "diabetes" ||
    healthConditions === "hypertension" ||
    healthConditions === "cardiac issues"
  ) {
    TDEE -= 250;
  } else {
    TDEE -= 0;
  }

  //Calculate macronutrient ratios based on TDEE
  calories = TDEE;
  //multipliction values based on percentages
  let retStr = "";
  if (goal === "Lose Weight") {
    protein = weight * 0.8;
    carbs = (calories * 0.3) / 4;
    fats = (calories * 0.2) / 9;
  } else if (goal === "Gain Muscle") {
    protein = weight * 1.2;
    carbs = (calories * 0.4) / 4;
    fats = (calories * 0.3) / 9;
  } else {
    protein = weight * 1.0;
    carbs = (calories * 0.35) / 4;
    fats = (calories * 0.25) / 9;
  }
  retStr += `According to your details this is the your daily amount of calories :${Math.round(
    calories
  )} Calories, Protein: ${Math.round(protein)}g, Carbs: ${Math.round(
    carbs
  )}g, Fats: ${Math.round(fats)}g <br>`;

  protein = protein * 7;
  carbs = carbs * 7;
  fats = fats * 7;
  calories = calories * 7;
  retStr += `According to your details this is the your Weekly amount of calories:${Math.round(
    calories
  )} Calories, Protein: ${Math.round(protein)}g, Carbs: ${Math.round(
    carbs
  )}g, Fats: ${Math.round(fats)}g`;
  console.log(`Bmi: ${bmi}, BMR: ${BMR}, TDEE: ${TDEE}`);
  return retStr;
}

workOutButton.addEventListener("click", () => {
  workOutDiv.innerHTML = `<p> ${generateWorkout()} </p>`;
});

mealPlanButton.addEventListener("click", () => {
  weight = document.getElementById("weight");
  heightFt = document.getElementById("HeightFt");
  heightInch = document.getElementById("HeightInch");
  docAge = document.getElementById("age");
  activityDropdown = document.getElementById("activitySelect");
  healthDropdown = document.getElementById("healthSelect");
  goalDropdown = document.getElementById("goal");
  mealPlanDropdown = document.getElementById("mealPlanType");
  mealPlanButton = document.getElementById("generate-meal-plan-button");
  mealPlanDiv = document.getElementById("displayMealPlanAndCal");
  genderDropdown = document.getElementById("gender");
  form = document.getElementById("formMain");
  let mealPlanText = `<p> ${generateMealPlan()} </p> <br> <p> ${createNutritionPlan(
    weight.value,
    heightFt.value,
    heightInch.value,
    docAge.value,
    genderDropdown.value,
    activityDropdown.value,
    healthDropdown.value,
    goalDropdown.value
  )} </p>`;
  mealPlanDiv.innerHTML = mealPlanText;
});

//When the user changes the dropdown, notice the change
selectMuscles.addEventListener("change", (event) => {
  console.log("Choosing Muscle", event.target.value);
  displayMuscles.innerHTML = muscleToLift(event.target.value);
});

//Resources: https://barbend.com/
//https://www.healthline.com/health/exercise-fitness/muscle-groups-to-workout-together#muscle-groups

function muscleToLift(muscle) {
  mainDict = {
    Biceps:
      "Barbell Curl, Chin-ups, Hammer Curl, Incline Dumbbell Curl, Cable Curl",
    Chest: "Bench Press, Push ups, Dips, Chest Flye, Landmine Press",
    Back: "Deadlift, Pull-Up, Bent-Over Row, Chest-Supported Row, Single-Arm Dumbbell Row, Inverted Row",
    Hamstring:
      "Leg Curl, Hamstring Slide, Razor Curl, Kettlebell Swing, Romanian Deadlift",
    Arms: "Hammer Curl, Reverse Curl, Band Zottman Curl, Band Overhead Extension, Snatch Press",
    Abs: "Ab Rollout, Weighted Plank, Hollow Hold/Rock, Pallof Press, L-Sit, Sit-up",
    Legs: "Squat, Leg Press, Hack Squat, Romanian Deadlift, Nordic Hamstring Curl, Landmine Goblet Squat",
    Shoulders: "Dumbbell Raises, Barbell Overhead Press, Push Press",
    Calves:
      "Donkey Calf Raise, Seated Calf Raise, Single-Leg Calf Raise, Jump Rope, Sled Drag",
    Quadriceps:
      "Heel-Elevated Back Squat, Hack Squat, Heel-Elevated Trap Bar Deadlift, Leg Press, Low Cable Split Squat",
    Triceps:
      "Close-Grip Barbell Bench Press, Parallel Bar Dip, Triceps Pushdown, Skull Crusher, Bodyweight Skull Crusher, Floor Press",
    Trapezius: "Shrugs, Overhead Carries, Suitcase Deadlift, Upright Row",
    "Latissimus Dorsi":
      "Pull-Up, Chin-Up, Lat Pulldown, Bent Over Row, Dumbbell Row",
  };
  if (muscle in mainDict) {
    return mainDict[muscle];
  }
  return "";
}

console.log(generateMealPlan());
console.log(generateWorkout());
