console.log("connected");
const allJobs = document.getElementById("all-jobs");
const rejectedJobs = document.getElementById("rejected-jobs");
const jobsForInterview = document.getElementById("jobs-for-interview");
const jobCounter = document.getElementById("job-counter");
const interviewJobs = document.getElementById("interview-jobs");
const rejectedJobsCounter = document.getElementById("rejected-jobs-counter");
const availableJobs = document.querySelector(".available-job");
const rejectJob = document.querySelector(".rejected-job");
const interviewJobCounter = document.querySelector(".interview-job-counter");

function toggleButton(id) {
  allJobs.classList.add("hidden");
  rejectedJobs.classList.add("hidden");
  jobsForInterview.classList.add("hidden");
  const clickedButton = document.getElementById(id);
  clickedButton.classList.remove("hidden");
  if (id == "all-jobs") {
    availableJobs.innerText = jobCounter.innerText;
  } else if (id == "rejected-jobs") {
    rejectJob.innerText = rejectedJobsCounter.innerText;
  } else {
    interviewJobCounter.innerText = interviewJobs.innerText;
  }
}

function moveToInterview(id) {
  const job = document.getElementById(id);
  const copy = job.cloneNode(true);
  jobsForInterview.appendChild(copy);
  jobsForInterview.firstElementChild.classList.add("hidden");
  jobsForInterview.classList.remove(
    "bg-white",
    "py-[111px]",
    "px-6",
    "rounded-md",
    "hidden",
  );
  interviewJobs.innerText++;
  job.children[3].innerText = "Applied";
}
function moveToRejected(id) {
  const job = document.getElementById(id);
  const copy = job.cloneNode(true);
  rejectedJobs.appendChild(copy);
  rejectedJobs.firstElementChild.classList.add("hidden");
  rejectedJobs.classList.remove(
    "bg-white",
    "py-[111px]",
    "px-6",
    "rounded-md",
    "hidden",
  );
  rejectedJobsCounter.innerText++;
  job.children[3].innerText = "Rejected";
}

function deleteBox(id) {
  const jobId = document.getElementById(id);
  jobId.classList.add("hidden");
  jobCounter.innerText--;
  availableJobs.innerText = jobCounter.innerText;
}
