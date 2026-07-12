let age = 65; 
let isStudent = false; 
let ticketFare = 800; 
if (age < 10) {
    ticketFare = 0;
    console.log("Children are free. You pay: " + ticketFare + " tk");
    
} else if (isStudent === true) {
    // Students get a 50% discount
    ticketFare = 800 - (800 * 50 / 100); 
    console.log("Student discount applied. You pay: " + ticketFare + " tk");
} else if (age >= 60) {
    ticketFare = 800 - (800 * 15 / 100);
    console.log("Senior discount applied. You pay: " + ticketFare + " tk");
} else {
    console.log("Regular ticket. You pay: " + ticketFare + " tk");
}
