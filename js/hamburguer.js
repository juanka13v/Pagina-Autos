export function hamburguer(btn, menu) {
    const $btn = document.querySelector(btn);
    const $menu = document.querySelector(menu);
  
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
        $btn.innerHTML = close;
        $menu.classList.toggle('menu-active');
      } else {
        $btn.innerHTML = open;
        $menu.classList.toggle('menu-active');
      }
    });

    $menu.addEventListener("click", (e) => {
      $btn.innerHTML = open;
      $menu.classList.toggle('menu-active');
    })
  }