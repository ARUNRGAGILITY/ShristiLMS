// Test JavaScript functionality
function testFunction() {
  document.getElementById("output").innerHTML =
    '<strong style="color: green;">✅ JavaScript is working perfectly!</strong><br>' +
    "Time tested: " +
    new Date().toLocaleTimeString();
}

function showDateTime() {
  const now = new Date();
  document.getElementById("output").innerHTML =
    "<strong>Current Date & Time:</strong><br>" +
    now.toLocaleDateString() +
    " at " +
    now.toLocaleTimeString();
}

function changeColors() {
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector(
    ".container"
  ).style.borderTop = `5px solid ${randomColor}`;
  document.getElementById(
    "output"
  ).innerHTML = `<strong>Theme changed!</strong><br>New accent color: ${randomColor}`;
}

function echoInput() {
  const input = document.getElementById("user-input").value;
  const output = document.getElementById("echo-output");
  if (input.trim()) {
    output.innerHTML = `You typed: "${input}"`;
    output.style.color = "#007bff";
  } else {
    output.innerHTML = "Please type something first!";
    output.style.color = "#dc3545";
  }
}

// Initialize page info
window.onload = function () {
  document.getElementById("current-date").textContent =
    new Date().toLocaleDateString();
  document.getElementById("browser-info").textContent =
    navigator.userAgent.split(" ")[0];
  document.getElementById("screen-size").textContent =
    screen.width + " x " + screen.height + " pixels";
};

// Add some interactive effects
document.addEventListener("mousemove", function (e) {
  if (Math.random() > 0.99) {
    // Occasional sparkle effect
    const sparkle = document.createElement("div");
    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.width = "4px";
    sparkle.style.height = "4px";
    sparkle.style.backgroundColor = "#ffd700";
    sparkle.style.borderRadius = "50%";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "9999";
    document.body.appendChild(sparkle);

    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 1000);
  }
});
