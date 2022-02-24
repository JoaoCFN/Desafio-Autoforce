// FUNÇÃO QUE ANIMA A ROLAGEM DO SITE PARA CIMA COM O CLIQUE DO BOTÃO
// FAZ TRANSIÇÃO SUAVE PELO SCROLL	
(function animateScroll() {
    const buttonScroll = document.querySelector("#btn-scroll-top");
    buttonScroll.addEventListener("click", scrollOnClick); 
    
    // função que realiza o scroll suave
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
      
        duration = typeof duration !== 'undefined' ? duration : 400;
      
        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };

    function scrollOnClick(event){
        event.preventDefault();
        // target retorna a var elemento qual o elemento foi clicado no evento de click
        let elemento = event.target;
        // pego do atributo desse elemento 
        let id = elemento.getAttribute("data-href");
        // // o queryselector é usando para capturar o elemento que possui o id especificado na variável id
        // // offsetTop retorna a altura do elemento com esse id em relação ao topo da página
        let to = document.querySelector(id).offsetTop ;
        // // função que realiza o scroll suave
        // // x, y e a duração
        smoothScrollTo(0, to, 700);
    }
})();
