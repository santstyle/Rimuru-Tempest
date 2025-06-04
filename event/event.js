// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Search Toggle
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');

searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
});

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change icon
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// View Toggle (Calendar/List)
const calendarViewBtn = document.getElementById('calendar-view-btn');
const listViewBtn = document.getElementById('list-view-btn');
const calendarView = document.getElementById('calendar-view');
const listView = document.getElementById('list-view');

calendarViewBtn.addEventListener('click', () => {
    calendarViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
    calendarView.style.display = 'block';
    listView.style.display = 'none';
});

listViewBtn.addEventListener('click', () => {
    listViewBtn.classList.add('active');
    calendarViewBtn.classList.remove('active');
    listView.style.display = 'block';
    calendarView.style.display = 'none';
});

// Category Filters
const categoryFilters = document.querySelectorAll('.category-filter');

categoryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        categoryFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        const category = filter.dataset.category;
        const eventCards = document.querySelectorAll('.event-card');

        eventCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Calendar Functionality
let currentDate = new Date();
const monthTitle = document.getElementById('current-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

function updateCalendar() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    monthTitle.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Initialize calendar
updateCalendar();

// Add Event Button
const addEventBtn = document.getElementById('add-event-btn');

addEventBtn.addEventListener('click', () => {
    alert('Event proposal form would open here!');
});