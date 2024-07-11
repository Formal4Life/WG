const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Define responses for the AI
const responses = {
    "hi": "Hello!",
    "how are you": "I'm just a script, but thanks for asking!",
    "what's your name": "I'm a simple AI script!",
    "bye": "Goodbye! Have a nice day."
};

// Function to generate AI response based on user input
function generateResponse(userInput) {
    userInput = userInput.toLowerCase().trim();

    // Check if the user input matches any predefined response
    for (let key in responses) {
        if (userInput.includes(key)) {
            return responses[key];
        }
    }

    // Default response if no match found
    return "I'm sorry, I don't understand that.";
}

// Function to add a message to the chatbox
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);

    // Scroll chatbox to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Event listener for user input
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const message = userInput.value.trim();
        if (message !== '') {
            // Add user message to chatbox
            addMessage(message, 'user');

            // Generate AI response
            const response = generateResponse(message);

            // Add AI response to chatbox
            addMessage(response, 'ai');

            // Clear input field
            userInput.value = '';
        }
    }
});
