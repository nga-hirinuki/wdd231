const courseButtons = document.querySelectorAll('.course-listing button');
const course = [
  // ...existing course objects...
];

//courseButtons
function filterCourses(subject) {
  courseButtons.forEach(btn => {
    const text = btn.textContent;
    if (subject === 'all') {
      btn.style.display = 'inline-block';
    } else if (subject === 'cse') {
      btn.style.display = text.includes('CSE') ? 'inline-block' : 'none';
    } else if (subject === 'wdd') {
      btn.style.display = text.includes('WDD') ? 'inline-block' : 'none';
    }
  });
}

document.getElementById('all').addEventListener('click', e => {
  e.preventDefault();
  filterCourses('all');
});

document.getElementById('cse').addEventListener('click', e => {
  e.preventDefault();
  filterCourses('cse');
});

document.getElementById('wdd').addEventListener('click', e => {
  e.preventDefault();
  filterCourses('wdd');
});




const courseBtns = document.querySelectorAll('.course-listing button');
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const detailsDiv = document.getElementById('course-details');

courseBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    // Get course code from button text, e.g. "WDD 130"
    const code = btn.textContent.trim().split(' ')[0];
    const number = btn.textContent.trim().split(' ')[1];
    // Find course in array
    const course = courses.find(c => c.subject === code && c.number == number);
    // Calculate total credits using reduce
    const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);

    if (course && detailsDiv) {
  detailsDiv.innerHTML = `
    <div class="course-card">
      <h3>
          ${course.subject} ${course.number}: ${course.title}
          &nbsp; | &nbsp; <strong>Credits:</strong> ${course.credits}
      </h3>
      <p>
          <strong>Description:</strong> ${course.description}
      </p>
      <p>
        <strong>Technology:</strong> ${course.technology.join(', ')} &nbsp; | &nbsp;
        <span class="${course.completed ? 'completed' : 'not-completed'}">
            <strong>Completed:</strong> ${course.completed ? 'Yes' : 'No'}
        </span>
      </p>
    </div>
  `;
}
  });
});

// Event - Close card when clicking outside
document.addEventListener('click', function(e) {
  const card = document.querySelector('.course-card');
  if (card && !card.contains(e.target) && !e.target.closest('.course-listing button')) {
    detailsDiv.innerHTML = '';
  }
});

function highlightCompletedCourses() {
  document.querySelectorAll('.wdd-courses, .cse-courses').forEach(btn => {
    const text = btn.textContent.trim();
    // Extract subject and number from button text
    const [subject, number] = text.split(' ');
    const course = courses.find(c => c.subject === subject && c.number == number);
    if (course && course.completed) {
      btn.style.backgroundColor = "#159A9C"; // green
      btn.style.color = "#002333";
    } else {
      btn.style.backgroundColor = "#5e131e"; // reset to default
      btn.style.color = "";
    }
  });
}

// Call this function after the DOM is loaded and whenever you update/filter courses
highlightCompletedCourses();



// Display total credits for all courses
function getTotalCredits(courseArray) {
  return courseArray.reduce((sum, c) => sum + c.credits, 0);
}

function updateCreditInfo(filteredCourses) {
  const totalCredits = getTotalCredits(filteredCourses);
  document.getElementById('credit-info').innerHTML = `
    <div class="credit-card">
      <h3><strong>Total Credits:</strong> ${totalCredits}</h3>
    </div>
  `;
}

// Filter logic for buttons
document.getElementById('all').addEventListener('click', e => {
  e.preventDefault();
  updateCreditInfo(courses);
});

document.getElementById('cse').addEventListener('click', e => {
  e.preventDefault();
  const cseCourses = courses.filter(c => c.subject === 'CSE');
  updateCreditInfo(cseCourses);
});

document.getElementById('wdd').addEventListener('click', e => {
  e.preventDefault();
  const wddCourses = courses.filter(c => c.subject === 'WDD');
  updateCreditInfo(wddCourses);
});

// Optionally, show all credits on page load
updateCreditInfo(courses);