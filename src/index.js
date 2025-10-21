// index.js

// Callbacks
const handleClick = (ramen) => {
  // Get the ramen-detail div elements
  const detailImg = document.querySelector(".detail-image");
  const name = document.querySelector(".name");
  const restaurant = document.querySelector(".restaurant");
  const ratingDisplay = document.getElementById("rating-display");
  const commentDisplay = document.getElementById("comment-display");

  // Update the detail section with the ramen data
  detailImg.src = ramen.image;
  detailImg.alt = ramen.name;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Get the new-ramen form
  const form = document.getElementById("new-ramen");

  // Add submit event listener
  form.addEventListener("submit", (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get form data
    const newRamen = {
      name: event.target.name.value,
      restaurant: event.target.restaurant.value,
      image: event.target.image.value,
      rating: event.target.rating.value,
      comment: event.target["new-comment"].value,
    };

    // Get the ramen-menu div
    const ramenMenu = document.getElementById("ramen-menu");

    // Create new img element for the new ramen
    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;

    // Add click event listener to the new image
    img.addEventListener("click", () => handleClick(newRamen));

    // Append the new image to the ramen-menu div
    ramenMenu.appendChild(img);

    // Reset the form
    form.reset();
  });
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

          // Add click event listener to each image
          img.addEventListener("click", () => handleClick(ramen));

          // Append the image to the ramen-menu div
          ramenMenu.appendChild(img);
        });
      });
  } catch (error) {
    console.error("Error fetching ramens:", error);
  }
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
