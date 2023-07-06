// Modify the following array with your website content
const content = [
    "Button 1"
  ];
  
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", handleSearch);
  
  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const results = content.filter(item => item.toLowerCase().includes(searchTerm));
    console.log(results); // Replace with your desired action (e.g., displaying results)
  }
  
  function redirectToWebsite(url) {
    window.open(url, "_blank"); // Opens the URL in a new tab
  }

  function addNewButton() {
    const buttonContainer = document.querySelector('.button-container');
    const newButton = document.createElement('button');
    newButton.textContent = 'New Button';
    newButton.onclick = function() {
      // Handle click event for the new button
      redirectToWebsite('https://example.net');
    };
    
    buttonContainer.appendChild(newButton);
    
    rearrangeButtons();
  }
  
  function rearrangeButtons() {
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(function(button, index) {
      button.style.order = index + 1;
    });
  }
  
  function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('scripts');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}