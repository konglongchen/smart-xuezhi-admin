document.getElementById('toggleSidebar').onclick = () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
};

function loadModule(module) {
  window.location.href = `modules/${module}/index.html`;
}