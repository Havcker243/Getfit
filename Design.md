# Properties and Functions

|Properties|Description|
|----------|-----------|
|workoutTypes|           An array of workout type options.|
|    cardioExercises|        An array of cardio exercise options.|
|    strengthExercises|      An array of strength exercise options.|
|    yogaExercises|          An array of yoga exercise options.|
|    selectMuscles|          A reference to the select element for muscle group selection.|
|    displayMuscles|         A reference to the element displaying the selected muscle group.|
|    weight|                 A reference to the weight input element.|
|    heightFt|               A reference to the height in feet input element.|
|    heightInch|             A reference to the additional inch height input element.|
|    docAge|                 A reference to the age input element.|
|    activityDropdown|       A reference to the activity level select element.|
|    healthDropdown|         A reference to the health conditions select element.|
|    goalDropdown|           A reference to the goal select element.|
|    mealPlanDropdown|       A reference to the meal plan type select element.|
|    mealPlanButton|         A reference to the button that generates the meal plan.|
|    mealPlanDiv|            A reference to the element displaying the generated meal plan and calorie information.|
|    genderDropdown|         A reference to the gender select element.|
|    form|                   A reference to the main form element.|
|    workType|               A reference to the workout type select element.|
|    workOutButton|          A reference to the button that generates the workout plan.|
|    workOutDiv|             A reference to the element displaying the generated workout plan.|
|    mealPlans|              An array of meal plan options.|
|    veganMeals|             An array of vegan meal options.|
|    vegetarianMeals|        An array of vegetarian meal options.|
|    pescatarianMeals|       An array of pescatarian meal options.|
|    lowCarbMeals|           An array of low carb meal options.|
|    highProteinMeals|       An array of high protein meal options.|


|Methods|Description|
|----------|-----------|
|    generateWorkout|        a function that returns a workout string with the workout type and exercises based on the user's input.|
|    generateMealPlan|       a function that returns a meal plan string with the meal plan type and options based on the user's input.|
|    createNutritionPlan|    a function that takes in several arguments such as weight, height, age, gender, activity level, health conditions, and goal, it calculates the number of calories, protein, carbs and fats needed for a person and returns the result as a string.|
|    muscleToLift|           a function that takes in a single argument "muscle" and returns the exercises associated with that muscle from the mainDict object|








                OUTLINE:                    (NEED TO MAKE PICTURE OF THE FLOW OF THESE STEPS)
    Page Loads
    |
    
    User clicks on one of Meal builder, Workout Plans, Contact Us, Links and Vidoes (starts at home)

    If Meal Builder
        User inputs information in form elements.
        User selects meal plan type.
        User clicks "Generate Meal Plan" button.
        For the id "generate-meal-plan-button", OnClick() is called
        generateMealPlan function returns meal plan string and calorie information.
        createNutritionPlan function returns calorie, protein, carbs, fats information.
        Meal plan and calorie information displayed on the page.
        

    If Workout Plans,
        User selects muscle to lift.
        muscleToLift function returns exercises for selected muscle.
        Exercises displayed on the page.
        User selects workout type.
        User clicks "Generate Workout" button.
        For the id "generate-workout-button", OnClick() is called
        generateWorkout function returns workout string.
        Workout string displayed on the page.
        
    
