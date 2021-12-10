// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
// BONUS
// 1. Formattare le date in formato italiano(gg / mm / aaaa)
// 2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente(es.Luca Formicola > LF).
// 3. Al click su un pulsante “Mi Piace” di un post, incrementare il contatore di like al post e cambiare colore al testo del bottone.


// creo array

const post = [
    {
        name: 'Phil Mangione',
        profile: 'image=15',
        date: '03/23/1798',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        likes: 38,
        image: 'image=171',
    },
    {
        name: 'Harry Potter',
        profile: 'image=72',
        date: '12/15/2041',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, deserunt! Tempore reprehenderit quaerat, deleniti sit nobis harum molestiae corrupti dolores labore praesentium vel neque quae sequi quidem eos. Nostrum, odit!',
        likes: 300,
        image: 'image=11',
    },
    {
        name: 'Hermione Granger',
        profile: 'image=100',
        date: '12/22/2041',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id magnam molestias in vel, numquam tenetur. Nulla eaque error voluptates magni, aspernatur eveniet excepturi aut eum porro expedita tempore temporibus ipsam.',
        likes: 18,
        image: 'image=104',
    },
    {
        name: 'Albus Silente',
        profile: 'image=1',
        date: '11/30/2001',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique, maxime nam, facilis debitis dicta saepe doloribus repellendus corrupti cumque nostrum fugit. Sint, soluta blanditiis laboriosam facilis ea quidem aperiam!',
        likes: 328,
        image: 'image=174',
    },
    {
        name: 'Severus Piton',
        profile: 'image=666',
        date: '01/01/2022',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cupiditate autem sunt accusamus esse necessitatibus animi ex laborum veritatis rerum beatae exercitationem, eius ratione pariatur aliquid nulla vero culpa rem.',
        likes: 1818,
        image: 'image=200',
        
    },
]

// prendo in considerazione il container

let container = document.getElementById('container');

// ciclo for per inserire i post

for (let i = 0; i < post.length; i++) {
    const element = post[i];

    // creo template post
    const templateCard = `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="https://unsplash.it/300/300?${element.profile} " alt="${element.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.name}</div>
                    <div class="post-meta__time">${element.date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.text}</div>
        <div class="post__image">
            <img src="https://unsplash.it/300/300?${element.image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
        </div>
        `
    container.innerHTML += templateCard;

}

// evento like

// seleziono le variabili
let buttonLike = document.querySelectorAll('.js-like-button');
let likeCounter = document.querySelectorAll('.js-likes-counter');

// ciclo for per tutti i bottoni
for (let i = 0; i < buttonLike.length; i++) {
    // al click aggiungo o rimuovo la classe
   buttonLike[i].addEventListener('click', function () {
      buttonLike[i].classList.toggle('like-button--liked');

    //   se premo aumento il nr like
       if (buttonLike[i].classList.contains('like-button--liked') == true){
           likeCounter[i].innerHTML = post[i].likes += 1;
    //   altrimenti premo di nuovo e diminuisco il like
        } else {
           likeCounter[i].innerHTML = post[i].likes -= 1; 
       }
        
   })
    
}
