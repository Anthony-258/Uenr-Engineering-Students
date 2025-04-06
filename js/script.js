// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        // Update UI for logged in state
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'block';
        document.getElementById('dashboard-link').style.display = 'block';
        
        if (document.getElementById('student-name')) {
            document.getElementById('student-name').textContent = currentUser.name;
        }
    }
});

// Login Functionality
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Simple validation (in a real app, this would check against a database)
        if (email === 'student@example.com' && password === 'password123') {
            const currentUser = {
                name: "John Doe",
                email: email,
                role: "student"
            };
            
            // Save user to localStorage
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            document.getElementById('login-error').textContent = 'Invalid email or password';
        }
    });
}

// Logout Functionality
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Payment Methods
function selectPayment(method) {
    document.querySelectorAll('.payment-form').forEach(form => {
        form.style.display = 'none';
    });
    
    document.querySelectorAll('.payment-card').forEach(card => {
        card.style.border = 'none';
    });
    
    document.getElementById(method + '-form').style.display = 'block';
    event.currentTarget.style.border = '2px solid var(--primary)';
}

// Process Payment
function processPayment() {
    // In a real app, this would connect to a payment gateway
    document.getElementById('credit-card-form').style.display = 'none';
    document.getElementById('payment-success').style.display = 'block';
    
    // Generate random transaction ID
    document.getElementById('transaction-id').textContent = 'PAY' + Math.floor(Math.random() * 100000000);
}

function processBankTransfer() {
    // In a real app, this would record the transfer details
    document.getElementById('bank-transfer-form').style.display = 'none';
    document.getElementById('payment-success').style.display = 'block';
    
    // Generate random transaction ID
    document.getElementById('transaction-id').textContent = 'TRF' + Math.floor(Math.random() * 100000000);
}

// Contact Form
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}