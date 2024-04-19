let count = 0;
let num = "0";
let cardElement = document.getElementById("Card-2");
let cdChildren = cardElement.querySelectorAll("*");
for (let i = 0; i < cdChildren.length; i++) {
  cdChildren[i].classList.add("Cl");
}
function Active1() {
  let ratingElement = document.getElementById("1");

  if (count === 0) {
    ratingElement.classList.toggle("Selected");
    count = 1;
    num = "Rating1";
  } else if (count !== 0) {
    for (let i = 1; i < 6; i++) {
      ratingElement = document.getElementById(String(i));
      ratingElement.classList.remove("Selected");
    }
    ratingElement = document.getElementById("1");
    ratingElement.classList.toggle("Selected");
    num = "Rating1";
  }
}
function Active2() {
  let ratingElement2 = document.getElementById("2");

  if (count === 0) {
    ratingElement2.classList.toggle("Selected");
    count = 1;
    num = "Rating2";
  } else if (count !== 0) {
    for (let i = 1; i < 6; i++) {
      ratingElement2 = document.getElementById(String(i));
      ratingElement2.classList.remove("Selected");
    }
    ratingElement2 = document.getElementById("2");
    ratingElement2.classList.toggle("Selected");
    num = "Rating2";
  }
}
function Active3() {
  let ratingElement3 = document.getElementById("3");

  if (count === 0) {
    ratingElement3.classList.toggle("Selected");
    count = 1;
    num = "Rating3";
  } else if (count !== 0) {
    for (let i = 1; i < 6; i++) {
      ratingElement3 = document.getElementById(String(i));
      ratingElement3.classList.remove("Selected");
    }
    ratingElement3 = document.getElementById("3");
    ratingElement3.classList.toggle("Selected");
    num = "Rating3";
  }
}
function Active4() {
  let ratingElement4 = document.getElementById("4");

  if (count === 0) {
    ratingElement4.classList.toggle("Selected");
    count = 1;
    num = "Rating4";
  } else if (count !== 0) {
    for (let i = 1; i < 6; i++) {
      ratingElement4 = document.getElementById(String(i));
      ratingElement4.classList.remove("Selected");
    }
    ratingElement4 = document.getElementById("4");
    ratingElement4.classList.toggle("Selected");
    num = "Rating4";
  }
}
function Active5() {
  let ratingElement = document.getElementById("5");

  if (count === 0) {
    ratingElement.classList.toggle("Selected");
    count = 1;
    num = "Rating5";
  } else if (count !== 0) {
    for (let i = 1; i < 6; i++) {
      ratingElement = document.getElementById(String(i));
      ratingElement.classList.remove("Selected");
    }
    ratingElement = document.getElementById("5");
    ratingElement.classList.toggle("Selected");
    num = "Rating5";
  }
}
function Submit() {
  let finalElement = document.getElementById(num);
  let cardElement = document.getElementById("Card-2");
  let stCardElement = document.getElementById("Card-1");
  let stChildren = stCardElement.querySelectorAll("*");
  let cdChildren = cardElement.querySelectorAll("*");

  // stChildren.classList.add("Cl");
  for (let i = 0; i < stChildren.length; i++) {
    stChildren[i].classList.add("Cl");
  }
  setTimeout(changeCard, 500);
  function changeCard() {
    finalElement.classList.remove("Ra");
    stCardElement.classList.add("Ra");
    for (let i = 0; i < cdChildren.length; i++) {
      cdChildren[i].classList.remove("Cl");
    }
    cardElement.classList.remove("Ra");
    for (let i = 0; i < cdChildren.length; i++) {
      cdChildren[i].classList.remove("Cl");
    }
  }
}
