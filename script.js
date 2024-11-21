document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("colorForm");
    const colorInput = document.getElementById("colorInput");

    // Check if color value exists in local storage and log it to the console
    const savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
        console.log(`Saved Color: ${savedColor}`);
        colorInput.value = savedColor; // Set it as the current value of the input
    }

    // Add an event listener to prevent default and handle input
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        const selectedColor = colorInput.value; // Get the color value
        console.log(`Selected Color: ${selectedColor}`); // Output to console
        localStorage.setItem("selectedColor", selectedColor); // Save to local storage
    });
});
