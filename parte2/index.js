function addDropdownItem(){
    // Capturando itens do menu e criando o novo item de dropdown
    let navItems = document.querySelectorAll(".nav-item.nav-simple__item");
    let newDropdownItem = document.createElement("li");
    // Setando o estado do item dropdown
    let dropDownIsOpen = false;

    newDropdownItem.setAttribute("style", "--animation-index: 1");
    newDropdownItem.setAttribute("class", "nav-item nav-simple__item");
    newDropdownItem.innerHTML = `
        <a 
            href="/autoforce-ford#" 
            class="nav-link nav-simple__link"        
            data-toggle="dropdown"
        > 
            Veículos 
            <i class="icon icon-dropdown icon-arrow-d"></i>
        </a>

        <div class="nav-simple-sub card-collapse-deep dropdown-menu">
            <ul class="list list--border-bottom">
                <li class="">
                    <a 
                        href="google.com" 
                        class="card-collapse-deep__title"
                    > 
                        Novos 
                    </a>
                </li>
                <li class="">
                    <a 
                        href="#" 
                        class="card-collapse-deep__title"
                    > 
                        Seminovos 
                    </a>
                </li>
            </ul>
        </div>
    `;

    // Substituindo o item 'novos' pelo item 'veiculos'
    navItems[1].parentNode.replaceChild(newDropdownItem, navItems[1]);
    // Removendo o item 'seminovos'
    navItems[2].remove();

    // Reorganizando os animations index para manter o padrão
    navItems = document.querySelectorAll(".nav-item.nav-simple__item");
    navItems.forEach((navItem, i) => {
        navItem.setAttribute(`style`, `--animation-index: ${i}`);
    });

    // Adicionando comportamento de dropdown ao novo item
    newDropdownItem.addEventListener("click", function(){
        if(dropDownIsOpen){
            this.classList.remove("show");
            this.querySelector(".nav-simple-sub").classList.remove("show");
            this.querySelector(".nav-link").setAttribute("aria-expanded", "false");
    
            dropDownIsOpen = false;
        }
        else{
            this.classList.add("show");
            this.querySelector(".nav-simple-sub").classList.add("show");
            this.querySelector(".nav-link").setAttribute("aria-expanded", "true");
    
            dropDownIsOpen = true;
        }
    });
}