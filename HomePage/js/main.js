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
let notificationFooter = document.querySelector("#notificationFooter");

notification.addEventListener("submit", message);

function message(event, clicked_id) {
  event.preventDefault(event, clicked_id);

  if (clicked_id === "Hero-notification") {
    notification.innerHTML = `Success!`;
    notification.classList.add("Join-label-success");
  } else {
    notificationFooter.innerHTML = `Success!`;
    notificationFooter.classList.add("Join-label-success");
  }
}
