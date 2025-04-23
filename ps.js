import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, get, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAhBMtH2ZUSU2_JLa7iCw7b-KJycr1wk-Q",
   authDomain: "jeevitha-fdefe.firebaseapp.com",
   projectId: "jeevitha-fdefe",
   storageBucket: "jeevitha-fdefe.firebasestorage.app",
   messagingSenderId: "714925169739",
   appId: "1:714925169739:web:644eedd05515f7978a01ce",
   measurementId: "G-GJDE0K19SH"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 document.addEventListener("DOMContentLoaded", function ())
const form = document.getElementById("appointment_form").value;
const name = document.getElementById("appointment_name").value;
const email = document.getElementById("appointment_email").value;
// Validate required fields
if (!name || !email ) {
    alert("Please fill all required fields!");
    return;
}
// Create an object to store the appointment data
const appointmentData = {form,name,email,message,time,serivce,date,phone,time,services
};
console.log("Appointment Data:", appointmentData);
// Send data to Firebase
const db = window.firebaseDB;
const appointmentsRef = ref(db, "appointment_form"); // Create a reference to 'appointments'
node
push(appointmentsRef, appointmentData)
.then(() => {
alert("Appointment booked successfully!");
form.reset(); // Clear form after submission
})
.catch((error) => {
console.error("Error saving data:", error);
alert("Failed to book appointment. Please try again.");
});
console.log("Script connected successfully!");
console.log("Script loaded!");
 