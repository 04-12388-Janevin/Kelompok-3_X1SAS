document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.className = "star";

  star.style.left = e.clientX + "px";
  star.style.top = e.clientY + "px";

  // Random pastel sparkle colors
  const colors = ["#ffd6e8", "#d6f5ff", "#e8d6ff", "#fff2cc"];
  star.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 800);
});