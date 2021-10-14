export function hamburguer(btn, menu) {
    const $btn = document.querySelector(btn);
    const $menu = document.querySelector(menu);
    const noScroll = () => {
      window.scrollTo(0,0);
    };
  
    const close = `
          <span class="material-icons">
              close
          </span>
      `;
  
    const open = `
          <span class="material-icons">
              menu
          </span>
      `;
  
    $btn.addEventListener("click", (e) => {
      if ($btn.textContent.trim() === "menu") {
        window.addEventListener("scroll", noScroll)
        $btn.innerHTML = close;
        $menu.classList.toggle('menu-active');
      } else {
        window.removeEventListener("scroll", noScroll);
        $btn.innerHTML = open;
        $menu.classList.toggle('menu-active');
      }
    });

    $menu.addEventListener("click", (e) => {
      window.removeEventListener("scroll", noScroll);
      $btn.innerHTML = open;
      $menu.classList.toggle('menu-active');
    })
  }