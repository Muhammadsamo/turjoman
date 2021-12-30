const header = document.querySelector(".header");
const SidebarMenuListItem = document
  .querySelector(".sidebar__content__menu__list")
  .querySelectorAll("a");
const servicesLink = document.querySelector(".services-link");
const servicesContainer = document.querySelector(".services-container");
const ordersLink = document.querySelector(".orders-link");
const ordersContainer = document.querySelector(".orders-container");
const accountSettingsMenu = document.querySelector(".account-settings-menu");
const accountLink = document.querySelector(".account-link");
const accountSettingsListItem = document.querySelector(
  ".account__settings__list__item"
);
const accountSettingsContainer = document.querySelector(
  ".account-settings-container"
);
const generalSettingsLink = document.querySelector(".general-settings-link");
const generalSettingsContainer = document.querySelector(
  ".general-settings__container"
);

const passwordChangeLink = document.querySelector(".password-change-link");
const passwordChangeContainer = document.querySelector(
  ".password-change__container"
);

const noOrders = document.querySelector('.no-orders');
const noOrdersBtn = document.querySelector('.no-orders__btn');
const orders = document.querySelector('.orders')
const currentOrdersLink = document.querySelector('.orders__current-order__link');
const previousOrdersLink = document.querySelector('.orders__previous-order__link');
const currentOrders = document.querySelector('.orders__current');
const previousOrders = document.querySelector('.orders__previous');

servicesLink.addEventListener("click", () => {
  servicesContainer.style.display = "block";
  ordersContainer.style.display = "none";
  accountSettingsContainer.style.display = "none";
  header.style.display = "block";
  accountSettingsMenu.style.display = "none";
});

ordersLink.addEventListener("click", () => {
  servicesContainer.style.display = "none";
  ordersContainer.style.display = "block";
  accountSettingsContainer.style.display = "none";
  header.style.display = "none";
  accountSettingsMenu.style.display = "none";
});

accountLink.addEventListener("click", () => {
  servicesContainer.style.display = "none";
  ordersContainer.style.display = "none";
  accountSettingsContainer.style.display = "block";
  // generalSettingsContainer.style.display = "block";
  // passwordChangeContainer.style.display = "none";
  header.style.display = "none";
  accountSettingsMenu.style.display = "block";
});

generalSettingsLink.addEventListener("click", () => {
  generalSettingsContainer.style.display = "block";
  passwordChangeContainer.style.display = "none";
});

passwordChangeLink.addEventListener("click", () => {
  generalSettingsContainer.style.display = "none";
  passwordChangeContainer.style.display = "block";
});

// To Add/Remove active class on Sidebar links When clicked.

SidebarMenuListItem.forEach((element) => {
  element.addEventListener("click", function () {
    SidebarMenuListItem.forEach((e) => e.classList.remove("active-link"));

    this.classList.add("active-link");
  });
});

// To show Orders

noOrdersBtn.addEventListener('click', () => {
  noOrders.style.display = 'none';
  orders.style.display = 'block';
});

currentOrdersLink.addEventListener('click', () => {
  currentOrders.style.display = 'block'
  previousOrders.style.display = 'none'
});

previousOrdersLink.addEventListener('click', () => {
  currentOrders.style.display = 'none'
  previousOrders.style.display = 'block'
});
