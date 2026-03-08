
let currentTab = "all";

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-card");



const tabActive = ["bg-black", "text-white"];
const tabInactive = ["bg-white", "text-[#64748B]"];

function switchTab(tab) {
    // console.log(tab);
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for (const t of tabs) {
        // console.log(t)
        const tabName = document.getElementById("tab-" + t)
        // console.log(tabName)
        if (t === tab) {
            tabName.classList.remove(...tabInactive)
            tabName.classList.add(...tabActive)
        }
        else {
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInactive)
        }
    }

    emptyState.classList.add("hidden");

    if (tab === "all") {
        allContainer.classList.remove("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.add("hidden");
        if (allContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }

    } else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
        allContainer.classList.add("hidden");
        rejectedContainer.classList.add("hidden");
        if (interviewContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    } else if (tab === "rejected") {
        rejectedContainer.classList.remove("hidden");
        allContainer.classList.add("hidden");
        interviewContainer.classList.add("hidden");
        if (rejectedContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    updateStats();


}


// Stat Update
const statTotal = document.getElementById("stat-total");
const statInterview = document.getElementById("stat-interview");
const statRejected = document.getElementById("stat-rejected");
const statAvailable = document.getElementById("available");

statTotal.innerText = allContainer.children.length;
statInterview.innerText = interviewContainer.children.length;
statRejected.innerText = rejectedContainer.children.length;




switchTab(currentTab);

document.querySelector("main")
    .addEventListener("click", function (event) {
        const clickedElement = event.target;
        const card = clickedElement.closest(".card");
        // console.log(card);
        const status = card.querySelector(".stats");

        const parent = card.parentNode;

        if (clickedElement.classList.contains("interview-btn")) {
            status.innerText = "Interview";
            status.classList.remove("text-red-500");
            status.classList.add("text-green-500");
            interviewContainer.appendChild(card);

        } else if (clickedElement.classList.contains("rejected-btn")) {
            status.innerText = "Rejected";
            status.classList.remove("text-green-500");
            status.classList.add("text-red-500");
            rejectedContainer.appendChild(card);
        } else if (clickedElement.classList.contains("delete-btn")) {
            parent.removeChild(card);

        }
        updateStats();
    })


// Update Stat

function updateStats() {
    // statTotal.innerText = allContainer.children.length;
    // statInterview.innerText = interviewContainer.children.length;
    // statRejected.innerText = rejectedContainer.children.length;

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length
    }
    statTotal.innerText = counts.all;
    statInterview.innerText = counts.interview;
    statRejected.innerText = counts.rejected;
    statAvailable.innerText = counts[currentTab];

    if (counts[currentTab] < 1) {
        emptyState.classList.remove("hidden");
    }
}
updateStats();