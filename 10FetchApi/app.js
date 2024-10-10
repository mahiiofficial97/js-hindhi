const url = "https://api.thecatapi.com/v1/images/search?limit=10";

const btn = document.querySelector("#btn");
const factpara = document.querySelector("#fact");

const getfact = async () => {
  console.log("getting data....");
  let response = await fetch(url);
  let data = await response.json();

  // Create or update the image element
  let img = document.createElement("img");
  img.src = data[0].url; // Set the image URL from the API response
  img.alt = "Random Cat";
  img.style.width = "300px"; // Set a fixed size or style it as needed

  // Clear previous content and display the image
  factpara.innerHTML = ""; // Clear the <p> content
  factpara.appendChild(img); // Add the image to the <p>
};

// Add the event listener after the function is declared
btn.addEventListener("click", getfact);
