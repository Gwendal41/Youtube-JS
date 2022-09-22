const creaDivCard = document.querySelector('.container-card');
const searchText = document.getElementById('youtube-search');

const arrVideo = [
    {name:'CSS only ? ', author:'Kevin', view:'17000', picture:'https:i.ytimg.com/vi/CG__N4SS1Fc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBi98gxuTQYjuKoKSuKaPf9Z5piWg'},
    {name:'can you beat the algo expert', author:'Kevin', view:'17000', picture:'https://i.ytimg.com/vi/cjunWJT0w40/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBMLfmxRyn2LReSQRURbpVRDXbnA'},
    {name:'CSS battle', author:'Kevin', view:'17000', picture:'https://i.ytimg.com/vi/ECsvqHoFZm8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKgcFXgr1jgPryEeNwd3HD7vsbog'},
    {name:'Belle lunette bg', author:'Kevin', view:'17000', picture:'https://i.ytimg.com/vi/ZY1PzHRu2dA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqpI-lI7kzJynmqghrvoLV5Wx_Rw'},
    {name:'Je réfléchis en cul de poule', author:'Kevin', view:'17000', picture:'https://i.ytimg.com/vi/yuzggllFaC0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-eXmBvfMCKutnpOxYkQG-UO80DQ'},
    {name:'La calvitie frappe tôt frerot', author:'Kevin', view:'17000', picture:'https://i.ytimg.com/vi/XA5m-iiTru0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCelzBwQEANFWedILujm2xLV6B1Wg'},
    {name:'Poce bleu ma gueule', author:'Kevin', view:'17000', picture:'https://i.ytimg.com/vi/h3bTwCqX4ns/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoXAl9eTD474TmiBJZqn-J1W2gwg'},
    {name:'Pas trop de motive Kevin', author:'Kevin', view:'17000', picture:'https://i.ytimg.com/vi/QJz81yva7r0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJOzb_2KnhRROlWzAu-eXzWKU0wg'},
    {name:'La réfléxion fait mal', author:'Kevin', view:'17000', picture:'https://i.ytimg.com/vi/3elGSZSWTbM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBdMhLkUady_HabS3-eqqSt-oBsw'},
]

function createDivCards(arrayObject){

    const divCard = document.createElement('div');
    divCard.classList.add('card-video');
    creaDivCard.appendChild(divCard);

    const miniaVideo = document.createElement('img');
    miniaVideo.classList.add('minia-video');
    divCard.appendChild(miniaVideo);
    miniaVideo.src=arrayObject.picture;
    

    const titleVideo = document.createElement('h1');
    titleVideo.classList.add('title-video');
    divCard.appendChild(titleVideo);
    titleVideo.innerHTML= arrayObject.name;

    const authorVideo = document.createElement('p');
    authorVideo.classList.add('author');
    divCard.appendChild(authorVideo);
    authorVideo.innerHTML= arrayObject.author;

    const viewVideo = document.createElement('p');
    viewVideo.classList.add('view');
    divCard.appendChild(viewVideo);
    viewVideo.innerHTML = arrayObject.view;

}

for (let i=0; i<arrVideo.length;i++){
    createDivCards(arrVideo[i]);
}


function removeVideo(){
    const valueSearchText = document.getElementById('youtube-search').value;
    const valueFilterVideo = arrVideo.filter(text => text.name.toLowerCase().includes(valueSearchText));
    creaDivCard.innerHTML ='';
    
    for (let i=0; i<valueFilterVideo.length; i++){
        creaDivCard.innerHTML +=`<div class="card-video">
        <img class="minia-video" src=${valueFilterVideo[i].picture}>
        <h1 class="title-video">${valueFilterVideo[i].name}</h1>
        <p class="author">${valueFilterVideo[i].author}</p>
        <p class="view">${valueFilterVideo[i].view}</p>
        </div>`;
    }
}
    searchText.oninput = function() {removeVideo()};

    