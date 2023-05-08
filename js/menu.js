class Menu {
  constructor() {
    this.card = document.querySelector(".card-menu");
    this.menu = document.querySelector(".menuu");
    this.menu1 = document.querySelector(".menu1");
    this.menu2 = document.querySelector(".menu2");
    this.menu3 = document.querySelector(".menu3");
    this.menu4 = document.querySelector(".menu");
    this.menu5 = document.querySelector(".listamenu");
  }

  handleclick() {
    this.menu.addEventListener("click", () => {
      this.menu1.classList.toggle("active1");
      this.menu2.classList.toggle("active2");
      this.menu3.classList.toggle("active3");
      this.menu4.classList.toggle("active4");
      this.menu5.classList.toggle("active5");
    });
  }
}

const menu = new Menu();

menu.handleclick();
