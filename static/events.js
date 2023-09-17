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