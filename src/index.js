// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
};

const displayRamens = () => {
  try {
    // Fetch all ramens from the API
    fetch("http://localhost:3000/ramens")
      .then((res) => res.json())
      .then((ramens) => {
        // get the ramen-menu div
        const ramenMenu = document.getElementById("ramen-menu");

        // Loop through each ramen and create an img element
        ramens.forEach((ramen) => {
          const img = document.createElement("img");
          img.src = ramen.image;
          img.alt = ramen.name;

          // Append the image to the ramen-menu div
          ramenMenu.appendChild(img);
        });
      });
  } catch {
    (error) => console.error("Error fetching ramens:", error);
  }
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
