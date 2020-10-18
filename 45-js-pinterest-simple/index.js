const kittyPicture = document.querySelector('div.img_wrapper img');
const kittyComment = document.querySelector(`button.comment`);
console.log(kittyPicture);
let isLiked = false;

kittyPicture.addEventListener('dblclick', () => {
    if (isLiked === false){
        const userLikes = document.createElement(`p`);
        const belowImage = document.querySelector(`div.img_wrapper`);
        userLikes.innerText = "I like it.";
        belowImage.appendChild(userLikes);
        isLiked = true;
    } 
})

kittyComment.addEventListener('click', () => {
    const userComment = document.createElement('p');
    const belowImage = document.querySelector(`p.commentlist`);
    userComment.innerText = document.querySelector(`label input`).value;
    belowImage.appendChild(userComment);
})