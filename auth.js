// Simulated user accounts with their unique dashboard pages
const accounts = [
    { username: "template", password: "ED123", dashboard: "Template.html" },
    { username: "exampleUser", password: "EX456", dashboard: "Example.html" }
    // Add more accounts as needed, each with a unique dashboard
];

// Function to check if the user credentials are correct
function login(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values from the login form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Find the matching account based on the entered username and password
    const userAccount = accounts.find(
        account => account.username === username && account.password === password
    );

    if (userAccount) {
        // If login is successful, redirect to the user's unique dashboard
        window.location.href = userAccount.dashboard;
    } else {
        // If credentials are incorrect, display an error message
        document.getElementById('error-msg').textContent = 'Invalid username or password';
    }
}
