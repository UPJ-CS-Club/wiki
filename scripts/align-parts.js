// Calculates the sizes of the header and sidebar in order to display content correctly
window.addEventListener("load", () => {
  const header = document.querySelector("header");
  const sidebar = document.getElementById("collapsable-sidebar");
  const mainContent = document.querySelector("main");

  const headerHeight = header.offsetHeight;

  sidebar.style.top = `${headerHeight}px`;
  sidebar.style.height = `calc(100vh - ${headerHeight}px)`;

  mainContent.style.marginTop = `${headerHeight}px`;
  mainContent.style.marginLeft = `${sidebar.offsetWidth}px`;
});
