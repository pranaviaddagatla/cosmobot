let sessionId = generateSessionId();

// Generate session ID (6-digit number + timestamp)
function generateSessionId() {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const timestamp = Date.now();
  return `${randomNum}-${timestamp}`;
}

const inputField = document.getElementById("chat-input");
const chatWindow = document.getElementById("chat-window");

// Function to simulate bot response
function botResponse(userMessage) {
  const apiResponse = `Session ID: ${sessionId}, Message: ${userMessage} -> Bot says: "I am chatting"`;
  //displayMessage("...", "bot-message");
  const typingMessageDiv = displayMessage("...", "bot-message");
  setTimeout(() => {
    // Update the content of the typing message div to the actual bot response
    typingMessageDiv.textContent =
      "Hi! I'm your assistant. How can I help you today?";
  }, 1000); // Simulate a delay for bot response
}

// Function to send a message

function sendMessage() {
  const message = inputField.value.trim(); // Get the message from the input field

  if (message) {
    // Display the message in the chat window
    displayMessage(message, "user-message"); // Use displayMessage function

    // Clear the input field
    inputField.value = "";
    botResponse(message);

    userMessageDiv.scrollIntoView({ behavior: "smooth", block: "end" });
    //chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}

// Function to display messages
function displayMessage(message, className) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(className);
  messageDiv.textContent = message;
  chatWindow.appendChild(messageDiv);
  return messageDiv;
}

// Add event listener for Enter key
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default action (like form submission)
    sendMessage(); // Call the sendMessage function
  }
});

function toggleChatWindow() {
  const chatContainer = document.getElementById("chat-container");
  const chatbotIcon = document.getElementById("chatbot-icon");

  if (
    chatContainer.style.display === "none" ||
    chatContainer.style.display === ""
  ) {
    chatContainer.style.display = "flex";
    chatbotIcon.style.display = "none";
  } else {
    chatContainer.style.display = "none";
    chatbotIcon.style.display = "block";
  }
}
