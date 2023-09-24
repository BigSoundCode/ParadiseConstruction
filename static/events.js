function handleScroll() {
    const content = document.querySelectorAll('.slide-up');
    const windowHeight = window.innerHeight;
    content.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < windowHeight) {
    item.classList.add('active');
    console.log('This works!');
    }
    });
    }
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);


    // Function to smoothly scroll to the target section
    function smoothScroll(target, duration) {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) {
                startTime = currentTime;
            }

            const timeElapsed = currentTime - startTime;
            const scrollAmount = Math.easeInOutQuad(
                timeElapsed,
                startPosition,
                distance,
                duration
            );
            window.scrollTo(0, scrollAmount);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        // Easing function for smooth scrolling
        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    }

    // Add click event listeners to your anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScroll(targetId, 1000); // You can adjust the duration (in milliseconds) to control the speed
        });
    });


    function changeImage() {
        // Get a reference to the image element
        var image = document.getElementById("home1");

        // Change the image source when the link is hovered over
        image.src = "images/230804-3195Battersea-10.jpg";

                // Get a reference to the green rectangle
                var rectangle = document.getElementById("rectangle1");

                // Grow the green rectangle to 100px width
                rectangle.style.width = "50px";
        
    }

    function changeImage2() {
        // Get a reference to the image element
        var image = document.getElementById("home1");

        // Change the image source when the link is hovered over
        image.src = "images/home/230804-3195BatterseaSmall-9.jpg";

                                  // Get a reference to the green rectangle
                                  var rectangle = document.getElementById("rectangle1");

                                  // Grow the green rectangle to 100px width
                                  rectangle.style.width = "0px";
        
    }

    function changeImage3() {
        // Get a reference to the image element
        var image = document.getElementById("home2");

        // Change the image source when the link is hovered over
        image.src = "images/230810-ChristelLane-9.jpg";

        // Get a reference to the green rectangle
        var rectangle = document.getElementById("rectangle2");

        // Grow the green rectangle to 100px width
        rectangle.style.width = "50px";
          
    }

    function changeImage4() {
        // Get a reference to the image element
        var image = document.getElementById("home2");

        // Change the image source when the link is hovered over
        image.src = "images/projects/230810-ChristelLane-8.jpg";

                          // Get a reference to the green rectangle
                          var rectangle = document.getElementById("rectangle2");

                          // Grow the green rectangle to 100px width
                          rectangle.style.width = "0px";
        
    }


    function changeImage5() {
        // Get a reference to the image element
        var image = document.getElementById("home3");

        // Change the image source when the link is hovered over
        image.src = "images/home/BayviewSmall-6.jpg";

          // Get a reference to the green rectangle
          var rectangle = document.getElementById("rectangle");

        // Grow the green rectangle to 100px width
        rectangle.style.width = "50px";
    }

    function changeImage6() {
        // Get a reference to the image element
        var image = document.getElementById("home3");

      

        // Change the image source when the link is hovered over
        image.src = "images/BayviewSmall-13.jpg";

                  // Get a reference to the green rectangle
                  var rectangle = document.getElementById("rectangle");

                  // Grow the green rectangle to 100px width
                  rectangle.style.width = "0px";
          

        
    }