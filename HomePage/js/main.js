const menuClick = () => {
  const headerNav = document.querySelector("#headerNav");

  if (headerNav.style.opacity == 0) {
    headerNav.style.opacity = "1";
    headerNav.style.zIndex = "0";
    headerNav.classList.add("is-show");
  } else {
    headerNav.style.opacity = "0";
    headerNav.style.zIndex = "-1";
    headerNav.classList.remove("is-show");
  }
};

let notification = document.querySelector("#notification");
notification.addEventListener("submit", message);

function message(event) {
  event.preventDefault();
  notification.innerHTML = `Success!`;
  notification.classList.add("Hero-label-success");
}
