document.getElementById("calculate-macros").addEventListener("click", function() {
  function sanitizeInput(input) {
    return input.trim();
  }

  var calories = parseFloat(sanitizeInput(document.getElementById("calories").value));
  var proteinPercent = parseFloat(sanitizeInput(document.getElementById("protein-percent").value));
  var carbsPercent = parseFloat(sanitizeInput(document.getElementById("carbs-percent").value));
  var fatsPercent = parseFloat(sanitizeInput(document.getElementById("fats-percent").value));

  if (isNaN(calories) || isNaN(proteinPercent) || isNaN(carbsPercent) || isNaN(fatsPercent)) {
    document.getElementById("macro-result").textContent = "Please enter valid numbers.";
    return;
  }

  if (calories <= 0) {
    document.getElementById("macro-result").textContent = "Calories must be greater than zero.";
    return;
  }

  if (proteinPercent < 0 || proteinPercent > 100 || carbsPercent < 0 || carbsPercent > 100 || fatsPercent < 0 || fatsPercent > 100) {
    document.getElementById("macro-result").textContent = "Percentages must be between 0 and 100.";
    return;
  }

  if (proteinPercent + carbsPercent + fatsPercent !== 100) {
    document.getElementById("macro-result").textContent = "Percentages must add up to 100%.";
    return;
  }

  var proteinGrams = (calories * (proteinPercent / 100)) / 4;
  var carbsGrams = (calories * (carbsPercent / 100)) / 4;
  var fatsGrams = (calories * (fatsPercent / 100)) / 9;

  document.getElementById("macro-result").textContent = "Protein: " + proteinGrams.toFixed(2) + "g, Carbs: " + carbsGrams.toFixed(2) + "g, Fats: " + fatsGrams.toFixed(2) + "g.";
});
