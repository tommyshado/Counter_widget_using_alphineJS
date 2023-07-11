// Counter factory function instance
const instanceOfCounter = counter();

// Alphine event listener
document.addEventListener("alphine:init", () => {
    Alphine.data("counter", instanceOfCounter);
});