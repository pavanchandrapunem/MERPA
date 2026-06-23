// Function to show the correct section
function loadSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}



//Making buttons inactive once it is clicked.
var button = document.getElementById("button1");
button.style.backgroundColor = "lightgreen";
button.addEventListener("click", function() {
    this.style.backgroundColor = "silver";
    this.disabled = this.disabled || true;
});

var button = document.getElementById("button2");
        button.style.backgroundColor = "lightgreen";

        // Function to confirm and run the main logic
        function confirmAndRun() {
            // Ask for user confirmation
            var userConsent = confirm("Use Inspect/Mobile View for newly Opened Tab.");
            
            if (userConsent) {
                button.style.backgroundColor = "silver"; //Changing button color once it is clicked
                button.disabled = true; //Making button inactive
                mobile(); // Call the mobile function
            } else {
                alert("When you click 'OK', You will see a new tab is opened. Open that tab and press CTRL+SHIFT+I (or) RIGHT CLICK on screen and select INSPECT option.");
            }
        }

        function mobile() {
            var counter = 0;
            var arr = ['mobiles', 'samsung', 'galaxy', 'kharagpur', 'guwahati', 'hyderabad', 'buds', 'earphones', 'bags', 'shirts',
                'pants', 'business', 'tyres', 'car', 'hyundai', 'tata', 'ford', 'volkswagen', 'ferrari', 'bugatti', 'qaw', 'qqr', 'zero'
            ];

            // Open the first URL in a new tab
            const firstTab = window.open('https://www.bing.com/search?q=' + arr[0], '_blank');

            // Open subsequent URLs in the first tab
            for (let i = 1; i < arr.length; i++) {
                setTimeout(function () {
                    firstTab.location.href = 'https://www.bing.com/search?q=' + arr[i];
                }, i * 3000); // 3000 milliseconds = 3 seconds
            }
        }

        function desktop() {
            var counter = 0;
            var arr=['facebook', 'instagram', 'IIT', 'virat kohli', 'ms dhoni', 'biryani', 'royal enfield', 'rasagulla','laddo', 'cooking',
                     'washing machine', 'air conditioner', 'india', 'audi', 'ducati', 'bmw', 'ford', 'volks wagen', 'ferrari', 'bugati', 'qaw','qqr', 'bbc', 'cod',
                     'pubg', 'bgmi', 'free fire', 'million','java', 'c++', 'c', 'five', 'four', 'three', 'two', 'one', 'zero'];
      
            // Open the first URL in a new tab
            const firstTab = window.open('https://www.bing.com/search?q='+ arr[0], '_blank');
      
            // Open subsequent URLs in the first tab
            for (let i = 1; i < arr.length; i++) {
                setTimeout(function() {      
                  firstTab.location.href = 'https://www.bing.com/search?q='+ arr[i];
                }, i * 3000); // 3000 milliseconds = 3 seconds
            }
          }

// If the # appears, remove it
if (window.location.hash) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

