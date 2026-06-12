// Chatbot Implementation
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbot = document.getElementById("chatbot");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSend = document.getElementById("chatbotSend");
const chatbotMessages = document.getElementById("chatbotMessages");

// Sample responses for the chatbot
const botResponses = [
  {
    keywords: ["hello", "hi", "hey"],
    response: "👋 Hello! How can I help you with LearnHub today?",
  },
  {
    keywords: ["course", "courses"],
    response:
      "📚 We offer courses in Web Development, Mobile Development, UI/UX Design, and Data Science. Would you like to explore our courses?",
  },
  {
    keywords: ["price", "cost", "payment"],
    response:
      "💰 Our courses are affordable and subscription-based. For pricing details, please contact our sales team.",
  },
  {
    keywords: ["certificate", "certification"],
    response:
      "🏆 Yes! You receive recognized certificates upon completing any of our courses.",
  },
  {
    keywords: ["help", "support", "assist"],
    response:
      "🆘 I'm here to help! You can ask me about courses, pricing, certificates, or other platform features.",
  },
  {
    keywords: ["thank", "thanks"],
    response: "😊 You're welcome! Is there anything else I can help you with?",
  },
];

const defaultResponse =
  "🤖 I'm not sure about that. Try asking me about our courses, pricing, or certifications!";

// Toggle chatbot visibility
chatbotToggle.addEventListener("click", () => {
  chatbot.classList.toggle("active");
  if (chatbot.classList.contains("active")) {
    chatbotInput.focus();
  }
});

// Close chatbot
chatbotClose.addEventListener("click", () => {
  chatbot.classList.remove("active");
});

// Send message function
function sendMessage() {
  const message = chatbotInput.value.trim();

  if (message === "") return;

  // Add user message to chat
  addMessage(message, "user");
  chatbotInput.value = "";

  // Get bot response
  const botReply = getBotResponse(message);

  // Add bot response after a short delay
  setTimeout(() => {
    addMessage(botReply, "bot");
  }, 500);
}

// Add message to chat
function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", `${sender}-message`);

  const messagePara = document.createElement("p");
  messagePara.textContent = text;

  messageDiv.appendChild(messagePara);
  chatbotMessages.appendChild(messageDiv);

  // Scroll to bottom
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Get bot response
function getBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  for (let i = 0; i < botResponses.length; i++) {
    for (let j = 0; j < botResponses[i].keywords.length; j++) {
      if (lowerMessage.includes(botResponses[i].keywords[j])) {
        return botResponses[i].response;
      }
    }
  }

  return defaultResponse;
}

// Send button click
chatbotSend.addEventListener("click", sendMessage);

// Send on Enter key
chatbotInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Close chatbot when pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && chatbot.classList.contains("active")) {
    chatbot.classList.remove("active");
  }
});
