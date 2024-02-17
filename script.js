document.addEventListener('DOMContentLoaded', function () {
    // Simple JavaScript for a basic live chat feature
    const chatButton = document.createElement('div');
    chatButton.id = 'live-chat';
    chatButton.textContent = 'Live Chat';

    chatButton.addEventListener('click', function () {
        alert('Welcome to our live chat! How can we assist you today?');
    });

    document.body.appendChild(chatButton);

    const orderForm = document.getElementById('order-form');

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const assignmentType = document.getElementById('assignment-type').value;
        const deadline = document.getElementById('deadline').value;
        const requirements = document.getElementById('requirements').value;

        // Perform any additional processing or validation as needed

        // For demonstration purposes, show an alert with the submitted data
        alert(`Order Submitted:\nAssignment Type: ${assignmentType}\nDeadline: ${deadline}\nRequirements: ${requirements}`);
    });
});

// Social Media Icons Script
document.addEventListener('DOMContentLoaded', function () {
    // Replace these placeholder URLs with your actual social media profile URLs
    const facebookURL = 'https://www.facebook.com/example';
    const twitterURL = 'https://twitter.com/example';
    const linkedinURL = 'https://www.linkedin.com/in/example';

    // Select the social icons container
    const socialIconsContainer = document.getElementById('social-icons');

    // Create social media icons and links
    const facebookIcon = createSocialIcon('facebook-icon.png', 'Facebook', facebookURL);
    const twitterIcon = createSocialIcon('twitter-icon.png', 'Twitter', twitterURL);
    const linkedinIcon = createSocialIcon('linkedin-icon.png', 'LinkedIn', linkedinURL);

    // Append the icons to the container
    socialIconsContainer.appendChild(facebookIcon);
    socialIconsContainer.appendChild(twitterIcon);
    socialIconsContainer.appendChild(linkedinIcon);

    // Function to create social media icons
    function createSocialIcon(iconSrc, altText, link) {
        const icon = document.createElement('img');
        icon.src = iconSrc;
        icon.alt = altText;

        const socialLink = document.createElement('a');
        socialLink.href = link;
        socialLink.target = '_blank'; // Open in a new tab
        socialLink.title = altText;
        socialLink.appendChild(icon);

        return socialLink;
    }
});

// Guarantees Script
document.addEventListener('DOMContentLoaded', function () {
    const guaranteesList = document.getElementById('guarantees');

    // Update the guarantees dynamically
    const guarantees = [
        'Plagiarism-Free Work: We guarantee original and plagiarism-free assignments.',
        'On-Time Delivery: Your assignments will be delivered on or before the deadline.',
        'Free Revisions: We offer free revisions to ensure your satisfaction with the work.'
        // Add more guarantees as needed
    ];

    // Create a list of guarantees
    const guaranteesListHTML = '<ul>' +
        guarantees.map(guarantee => `<li><strong>${guarantee}</strong></li>`).join('') +
        '</ul>';

    // Replace the content of the guarantees section
    guaranteesList.innerHTML = guaranteesListHTML;
});

// Contact Script
document.addEventListener('DOMContentLoaded', function () {
    const phoneElement = document.getElementById('phone');
    const emailElement = document.getElementById('email');

    // Replace these placeholder values with your actual contact information
    const phoneNumber = '+1 (555) 987-6543';
    const emailAddress = 'support@example.com';

    // Update the content dynamically
    phoneElement.textContent = phoneNumber;
    emailElement.textContent = emailAddress;
});

// Pricing Script
document.addEventListener('DOMContentLoaded', function () {
    const pricingOptions = document.getElementById('pricing-options');

    // Replace these placeholder pricing options with your actual content
    const pricingDetails = [
        {
            type: 'Standard Assignment',
            description: 'Basic writing assignment',
            price: '$50 - $100'
        },
        {
            type: 'Research Assistance',
            description: 'In-depth research support',
            price: '$80 - $150'
        },
        {
            type: 'Consultation',
            description: 'Expert consultation service',
            price: '$30 - $80 per hour'
        }
        // Add more pricing options as needed
    ];

    // Create HTML for each pricing option
    const pricingOptionsHTML = pricingDetails.map(option => `
        <div>
            <p><strong>${option.type}</strong></p>
            <p>${option.description}</p>
            <p><strong>Price Range:</strong> ${option.price}</p>
        </div>
    `).join('');

    // Append the pricing options to the Pricing section
    pricingOptions.innerHTML = pricingOptionsHTML;
});

// FAQ Script
document.addEventListener('DOMContentLoaded', function () {
    const faqList = document.getElementById('faq-list');

    // Replace these placeholder FAQ items with your actual content
    const faqItems = [
        {
            question: 'What services do you offer?',
            answer: 'We offer assignment writing, research assistance, and consultation services.'
        },
        {
            question: 'How do I place an order?',
            answer: 'You can place an order by filling out our straightforward order form with your assignment details.'
        },
        {
            question: 'Is my information secure?',
            answer: 'Yes, we are committed to ensuring the privacy and confidentiality of our clients\' information.'
        }
        // Add more FAQ items as needed
    ];

    // Create HTML for each FAQ item
    const faqItemsHTML = faqItems.map(item => `
        <div>
            <p><strong>${item.question}</strong></p>
            <p>${item.answer}</p>
        </div>
    `).join('');

    // Append the FAQ items to the FAQ list
    faqList.innerHTML = faqItemsHTML;
});

// Services Section Script
document.addEventListener('DOMContentLoaded', function () {
    // Toggle additional services visibility
    const additionalServices = document.getElementById('additional-services');

    // Hide additional services initially
    additionalServices.style.display = 'none';

    // Toggle visibility on click
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Show Additional Services';
    toggleButton.addEventListener('click', function () {
        if (additionalServices.style.display === 'none') {
            additionalServices.style.display = 'block';
            toggleButton.textContent = 'Hide Additional Services';
        } else {
            additionalServices.style.display = 'none';
            toggleButton.textContent = 'Show Additional Services';
        }
    });

    // Append toggle button to the Services section
    document.getElementById('services').appendChild(toggleButton);
});

// Blog Section Script
document.addEventListener('DOMContentLoaded', function () {
    const blogPosts = document.getElementById('blog-posts');

    // Sample blog posts (replace with your actual content)
    const blogData = [
        {
            title: 'Navigating International Assignments',
            content: 'Learn how to navigate the challenges of international assignments and succeed in your academic journey.'
        },
        {
            title: 'The Importance of Research in Assignments',
            content: 'Explore why thorough research is crucial in producing high-quality assignments and academic papers.'
        },
        {
            title: 'Tips for Effective Assignment Writing',
            content: 'Discover practical tips for improving your assignment writing skills and achieving better results.'
        }
        // Add more blog posts as needed
    ];

    // Create HTML for each blog post
    const blogPostsHTML = blogData.map(post => `
        <article>
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        </article>
    `).join('');

    // Append the blog posts to the Blog section
    blogPosts.innerHTML = blogPostsHTML;
});

// Testimonials Section Script
document.addEventListener('DOMContentLoaded', function () {
    const testimonialSlider = document.getElementById('testimonial-slider');

    // Sample testimonials (replace with your actual content)
    const testimonialsData = [
        {
            content: 'Global Assignment Professionals helped me ace my international business assignment. Excellent service!',
            author: 'John Doe'
        },
        {
            content: 'I\'m grateful for the research assistance provided by Global Assignment Professionals. Top-notch quality!',
            author: 'Jane Smith'
        },
        {
            content: 'The consultation service was invaluable in refining my thesis. Highly recommend!',
            author: 'Robert Johnson'
        }
        // Add more testimonials as needed
    ];

    // Create HTML for each testimonial
    const testimonialsHTML = testimonialsData.map((testimonial, index) => `
        <article class="${index === 0 ? 'active' : ''}">
            <p>${testimonial.content}</p>
            <p><em>- ${testimonial.author}</em></p>
        </article>
    `).join('');

    // Append the testimonials to the Testimonials section
    testimonialSlider.innerHTML = testimonialsHTML;

    // Testimonial slider functionality
    let currentIndex = 0;

    setInterval(() => {
        const testimonials = document.querySelectorAll('#testimonial-slider article');
        testimonials[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
    }, 5000); // Change testimonial every 5 seconds (adjust as needed)
});

// Payment Options Section Script
document.addEventListener('DOMContentLoaded', function () {
    const paymentOptions = document.querySelectorAll('#payment-options li');

    // Attach click event listener to each payment option
    paymentOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Clear the selection from all options
            paymentOptions.forEach(opt => opt.classList.remove('selected'));

            // Set the selected class on the clicked option
            option.classList.add('selected');

            // Perform any additional logic or actions based on the selected payment option
            const selectedPaymentMethod = option.textContent.trim();
            console.log(`Selected Payment Method: ${selectedPaymentMethod}`);

            // You can add more logic here, such as displaying relevant information or enabling a "Pay Now" button.
        });
    });
});

// Team Section Script
document.addEventListener('DOMContentLoaded', function () {
    const teamMembers = document.querySelectorAll('.team-member');

    // Attach mouseover and mouseout event listeners to each team member
    teamMembers.forEach(member => {
        member.addEventListener('mouseover', function () {
            // Show the tooltip on mouseover
            const tooltip = createTooltip(member);
            member.appendChild(tooltip);
        });

        member.addEventListener('mouseout', function () {
            // Remove the tooltip on mouseout
            const tooltip = member.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Function to create and return a tooltip element
    function createTooltip(member) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerHTML = `
            <h4>${member.querySelector('h3').textContent}</h4>
            <p>${member.querySelector('p:nth-child(2)').textContent}</p>
            <p>${member.querySelector('p:nth-child(3)').textContent}</p>
        `;
        return tooltip;
    }
});
