document.addEventListener('DOMContentLoaded', function() {
    const teamContainer = document.getElementById('team-members');
    const teamMembers = [];

    // 팀 컨테이너에 팀 구성원 추가
    teamMembers.forEach(member => {
        teamContainer.appendChild(member);
    });

    // 팀원 정보 표시/숨기기를 위한 팀원 클릭 이벤트
    teamContainer.addEventListener('click', function(event) {
        const clickedMember = event.target.closest('.team-member');
        if (clickedMember) {
            clickedMember.querySelector('.member-info').classList.toggle('show');
        }
    });

    // 지난 프로젝트의 연도 선택
    const yearSelectorProjects = document.getElementById('year-selector-projects');
    const projectArchive = document.getElementById('project-archive');

    yearSelectorProjects.addEventListener('change', function(event) {
        const selectedYear = event.target.value;
        // 선택한 연도를 기준으로 프로젝트를 필터링하고 표시
        // 이 부분은 데이터 소스를 기반으로 구현
    });

    // 문의 양식 제출
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
