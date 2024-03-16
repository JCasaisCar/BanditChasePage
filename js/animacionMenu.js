const navToggle =  document.querySelector(".nav-toggle") /*En navToggle se guarda lo que tiene la clase nav-toggle*/
const navMenu =  document.querySelector(".nav-menu") /*En navMenu se guarda lo que tiene la clase nav-menu*/

/*El toggle va a escuchar el clic y va a hacer una funcion*/
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible"); /*Si la clase "nav-menu-visible" está presente, la elimina, si no está presente, se agrega*/
})