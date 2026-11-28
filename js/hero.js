// Hover, tap or tab to a floating word to change the "Currently" line.
// Move away (or tap somewhere else) and it goes back to the default.

const words = document.querySelectorAll(".hero-word");
const current = document.querySelector("#current");
const defaultText = current.textContent; // whatever is written in the HTML

function showDoing(event) {
  current.textContent = event.currentTarget.dataset.doing;
}

function showDefault() {
  current.textContent = defaultText;
}

words.forEach(function (word) {
  word.addEventListener("mouseenter", showDoing); // mouse goes on
  word.addEventListener("mouseleave", showDefault); // mouse goes off
  word.addEventListener("focus", showDoing); // keyboard tabs on
  word.addEventListener("blur", showDefault); // keyboard tabs off
  word.addEventListener("click", showDoing); // phones
});

// clicking or tapping anywhere that isn't a word goes back to default
document.addEventListener("click", function (event) {
  if (!event.target.closest(".hero-word")) {
    showDefault();
  }
});
