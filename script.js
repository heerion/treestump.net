document.addEventListener('DOMContentLoaded', function() {
    const teamContainer = document.getElementById('team-members');
    const teamMembers = [];

    // Add team members to the team container
    teamMembers.forEach(member => {
        teamContainer.appendChild(member);
    });

    // Team member click event to show/hide member info
    teamContainer.addEventListener('click', function(event) {
        const clickedMember = event.target.closest('.team-member');
        if (clickedMember) {
            clickedMember.querySelector('.member-info').classList.toggle('show');
        }
    });

    // Year selector for past projects
    const yearSelectorProjects = document.getElementById('year-selector-projects');
    const projectArchive = document.getElementById('project-archive');

    yearSelectorProjects.addEventListener('change', function(event) {
        const selectedYear = event.target.value;
        // Filter and display projects based on selected year
        // This part will be implemented based on your backend or data source
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch('http://localhost:5500/send-email', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.textContent = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
            responseMessage.textContent = 'An error occurred while sending your message. Please try again later.';
        });
    });
});
