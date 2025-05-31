// DevTrack Application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

function initApp() {
    // Set up navigation
    setupNavigation();
    
    // Set up event listeners
    setupEventListeners();
    
    // Load initial data
    loadDashboardData();
}

function setupNavigation() {
    // Handle navigation clicks for both header and bottom nav
    const navLinks = document.querySelectorAll('.nav-link, .bottom-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link and its counterpart
            const linkText = this.textContent.trim();
            
            document.querySelectorAll('.nav-link, .bottom-nav-link').forEach(navLink => {
                if (navLink.textContent.trim() === linkText) {
                    navLink.classList.add('active');
                }
            });
            
            // Handle page navigation (to be implemented with actual views)
            navigateToPage(linkText.toLowerCase());
        });
    });
}

function navigateToPage(page) {
    console.log(`Navigating to ${page} page`);
    // This would be replaced with actual page navigation logic
    // For now, we'll just log the navigation
    
    // Hide all sections
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the relevant section if it exists
    const targetSection = document.getElementById(page);
    if (targetSection) {
        targetSection.style.display = 'block';
    } else {
        // If section doesn't exist yet, show dashboard as fallback
        const dashboardSection = document.getElementById('dashboard');
        if (dashboardSection) {
            dashboardSection.style.display = 'block';
        }
    }
}

function setupEventListeners() {
    // Event listeners for view details buttons
    const viewDetailsButtons = document.querySelectorAll('.btn-primary');
    viewDetailsButtons.forEach(button => {
        if (button.textContent.trim() === 'View Details') {
            button.addEventListener('click', function() {
                const cardTitle = this.closest('.card').querySelector('.card-title').textContent;
                viewEventDetails(cardTitle);
            });
        }
    });
}

function viewEventDetails(eventTitle) {
    console.log(`Viewing details for event: ${eventTitle}`);
    // This would be replaced with actual event details view logic
    // For now, we'll just log the event title
    
    // In a real implementation, this would:
    // 1. Fetch event details from the API
    // 2. Navigate to the event details page
    // 3. Populate the page with event data
}

function loadDashboardData() {
    // This function would fetch data from the API and populate the dashboard
    // For now, we're using static data in the HTML
    
    // In a real implementation, this would:
    // 1. Fetch upcoming events from the API
    // 2. Fetch notifications from the API
    // 3. Populate the calendar with event dates
    // 4. Update the UI with the fetched data
    
    console.log('Dashboard data loaded');
}

// Calendar functionality
function renderCalendar(year, month) {
    // This function would render the calendar for the specified month and year
    // For now, we're using static calendar in the HTML
    
    // In a real implementation, this would:
    // 1. Generate the calendar days for the specified month
    // 2. Highlight days with events
    // 3. Add event listeners to calendar days
}

// API interaction functions
async function fetchUserEvents() {
    try {
        const response = await fetch('/api/users/1/events');
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const events = await response.json();
        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}

async function fetchNotifications() {
    try {
        const response = await fetch('/api/users/1/notifications');
        if (!response.ok) {
            throw new Error('Failed to fetch notifications');
        }
        const notifications = await response.json();
        return notifications;
    } catch (error) {
        console.error('Error fetching notifications:', error);
        return [];
    }
}

// Helper functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
        return 'just now';
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    }
    
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
}
