let rating = document.querySelectorAll(".button-rating");
let submitButton = document.querySelector(".submit");
let ratingCard = document.querySelector(".main-rating");
let thankYou = document.querySelector(".thankyou");
let ratingOutput = document.getElementById("rating");

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", () => {
    let ratingNumber = rating[i].innerHTML;

    for (let i = 0; i < rating.length; i++) {
      rating[i].classList.contains("selected");
      rating[i].classList.remove("selected");
    }

    rating[i].classList.add("selected");

    submitButton.addEventListener("click", () => {
      ratingCard.style.display = "none";
      thankYou.style.display = "block";
      ratingOutput.innerHTML = ratingNumber;
    });
  });
}

