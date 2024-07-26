
for(let i = 0;i<16;i++){
  const items = document.createElement("div")
  items.classList.add("item")
  document.querySelector(".choice-container").appendChild(items)
}

document.querySelectorAll(".item").forEach(element => {
  element.innerHTML = `<img src="css/svgs/banana.svg" alt="banana">`
});