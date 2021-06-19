// let box_One = document.getElementById("boxOne");
// let box_Two = document.getElementById("boxTwo");
// let box_Three = document.getElementById("boxThree");
// let box_Four = document.getElementById("boxFour");
// let box_Five = document.getElementById("boxFive");

let boxes = document.getElementsByClassName("box");
let boxesArray = [...boxes];

for (let i = 0; i < boxesArray.length; i++) {
  let box = boxesArray[i];
  box.onclick = (e) => {
    for (let j = 0; j < boxesArray.length; j++) {
      let _box = boxesArray[j];
      if (_box.classList.contains("active")) {
        _box.classList.remove("active");
      }
    }

    e.target.classList.add("active");
  };
}

// box_One.onclick = () => {
//   box_One.classList.add("active");
//   box_Two.classList.remove("active");
//   box_Three.classList.remove("active");
//   box_Four.classList.remove("active");
//   box_Five.classList.remove("active");
// };

// box_Two.onclick = () => {
//   box_One.classList.remove("active");
//   box_Two.classList.add("active");
//   box_Three.classList.remove("active");
//   box_Four.classList.remove("active");
//   box_Five.classList.remove("active");
// };

// box_Three.onclick = () => {
//   box_One.classList.remove("active");
//   box_Two.classList.remove("active");
//   box_Three.classList.add("active");
//   box_Four.classList.remove("active");
//   box_Five.classList.remove("active");
// };

// box_Four.onclick = () => {
//   box_One.classList.remove("active");
//   box_Two.classList.remove("active");
//   box_Three.classList.remove("active");
//   box_Four.classList.add("active");
//   box_Five.classList.remove("active");
// };

// box_Five.onclick = () => {
//   box_One.classList.remove("active");
//   box_Two.classList.remove("active");
//   box_Three.classList.remove("active");
//   box_Four.classList.remove("active");
//   box_Five.classList.add("active");
// };
