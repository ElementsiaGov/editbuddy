// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

// Function to close modal when clicking outside
function closeModalOutside(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// Function to handle log out
function logout() {
    sessionStorage.clear(); // Clear session storage
    window.location.href = 'login.html'; // Redirect to login
}
