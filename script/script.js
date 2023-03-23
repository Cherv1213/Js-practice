window.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu__button");
  const drops = document.querySelectorAll(".submenu");

  menuButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currnetBtn = e.currentTarget;
      let drop = currnetBtn.closest(".menu__item").querySelector(".submenu");

      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("show");
        }
      });

      drop.classList.toggle("show");

      document.addEventListener("click", (e) => {
        if (!e.target.closest(".header__menu")) {
          drop.classList.remove("show");
        }
      });
    });
  });

  const link = document.querySelectorAll(".submenu__link");
  link.forEach((el) => {
    el.innerHTML = "Hello";
  });

  const myButton = document.querySelector(".button");

  myClick();

  function myClick() {
    myButton.addEventListener("click", () => {
      const name = document.querySelectorAll(".name");

      name.forEach((el) => {
        el.innerHTML = document.querySelector("#input1").value;
      });
      document.querySelector("#input1").value = "";
    });
  }

  document.body.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      const name = document.querySelectorAll(".name");

      name.forEach((el) => {
        el.innerHTML = document.querySelector("#input1").value;
      });
      document.querySelector("#input1").value = "";
    }
  });

  /*-------------------------------------------------------------------------------------------------*/
  const bttn = document.querySelectorAll(".cart-button"); // кнопка "добавить в корзину"
  const modalBody = document.querySelector(".modal"); // козина
  const counter = document.querySelector(".counter"); //счетчик количество товаров в корзине

  // массив корзина
  const basketArr = [];

  bttn.forEach((item) => {
    item.addEventListener("click", () => {
      const cart = item.closest(".cart");
      const textInfo = {
        title: cart.querySelector(".title").innerText,
        text1: cart.querySelector(".text-1").innerText,
        text2: cart.querySelector(".text-2").innerText,
        text3: cart.querySelector(".text-3").innerText,
      };

      const basket = `
               <div class="modal-body">
                  <h2 class="title">${textInfo.title}</h2>
                  <div>${textInfo.text1}</div>
                  <div>${textInfo.text2}</div>
                  <div>${textInfo.text3}</div>
                  <button class="item-remove">Remove</button>
               </div>
               `;
      modalBody.insertAdjacentHTML("beforeend", basket);

      basketArr.push(basket);
      // counter.innerHTML = basketArr.length;

      localStorage.setItem("cartArray", JSON.stringify(basketArr));
      const howm = JSON.parse(localStorage.getItem('cartArray'));
      counter.innerHTML = howm.length;

      const closeBttn = document.querySelectorAll('.item-remove');

        //  closeBttn.forEach((item) => {
        //     if(item){
        //        item.addEventListener('click', () => {
        //           item.closest('modal-body').remove();
        //        })
        //     }
      })
    });
  // });

});



