function addYoutubeButton(){
    // Capturando elementos da DOM
    let headerNetworkLinks = document.querySelector(".header__networks-list");

    // Criando elementos a serem adicionados
    let youtubeButton = document.createElement("a");
    let iconYoutubeButton = document.createElement("i");

    // Setando atributtos aos elementos criados
    youtubeButton.setAttribute("href", "https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ");
    youtubeButton.setAttribute("target", "_blank");
    iconYoutubeButton.setAttribute("class", "icon icon-youtube-header icon--small icon--hover-youtube");

    // Adicionando ícone ao botão do youtube
    youtubeButton.appendChild(iconYoutubeButton);

    // Adicionando botão do youtube a DOM
    headerNetworkLinks.appendChild(youtubeButton);
}