const projects = document.querySelectorAll(".projects li");

projects.forEach((project) => {
  project.addEventListener("onmouseover", () => {
    console.log("oi");
  });
});
