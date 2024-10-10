let score = prompt("Please enter your score:");

if (score >= 90) {
    alert("Your score is: " + score + " Excellent!");
} else if (score >= 80 && score <= 89) {
    alert("Your score is: " + score + "Good!");
} else if (score >= 70 && score <= 79) {
    alert("Your score is: " + score + " Fair.");
} else if (score < 70) {
    alert("Your score is: " + score + "." +" Needs Improvement.");
} else {
    alert("Invalid input.");
  
