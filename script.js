function showMessage() {
  alert("Welcome! You clicked the button 🎉");
}
function handleClick() {
  const btn = document.querySelector(".magic-btn");
  btn.innerText = "checked ✅";
  btn.style.background = "orange";
}