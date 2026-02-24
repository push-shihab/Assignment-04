console.log("connected");

function buttonToggle(id) {
  const jobs = document.getElementById("jobs-section");
  const noJobs = document.getElementById("empty-page");
  jobs.classList.add("hidden");
  noJobs.classList.add("hidden");

  const selectedButton = document.getElementById(id);
  selectedButton.classList.remove("hidden");
  console.log("clicked on", id);
}
