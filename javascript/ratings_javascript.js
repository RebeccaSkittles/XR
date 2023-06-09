// Assuming you have an empty <div> element with the id "ratings-container" in your HTML file

// Fetch the XML file
fetch('https://raw.githubusercontent.com/<github_username>/<repository>/main/ratings.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');
    
    // Get the ratings from the XML
    const products = xmlDoc.getElementsByTagName('product');
    
    // Loop through each product and generate the HTML code
    for (let i = 0; i < products.length; i++) {
      const id = products[i].getElementsByTagName('id')[0].textContent;
      const name = products[i].getElementsByTagName('name')[0].textContent;
      const rating = products[i].getElementsByTagName('rating')[0].textContent;
      
      const stars = getStarsHTML(rating);
      
      // Generate the HTML code for the product
      const productHTML = `
        <div>
          <h3>${name}</h3>
          <div class="stars">${stars}</div>
        </div>
      `;
      
      // Append the product HTML to the ratings container
      document.getElementById('ratings-container').innerHTML += productHTML;
    }
  });

// Helper function to generate the HTML code for the stars
function getStarsHTML(rating) {
  const maxRating = 5;
  let starsHTML = '';
  
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      starsHTML += '<span class="star">&#9733;</span>'; // Yellow star character
    } else {
      starsHTML += '<span class="star">&#9734;</span>'; // Empty star character
    }
  }
  
  return starsHTML;
}
