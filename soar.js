window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  // Lock scroll during splash
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.visibility = "hidden";

    // Enable scrolling again
    document.body.style.overflow = "auto";
  }, 3000);
});
