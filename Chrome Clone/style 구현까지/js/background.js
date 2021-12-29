const images = ["0. 봄.jpg", "2. 가을.jpg", "3. 겨울.jpg"];
const bgImage = document.createElement("img");
let count = 0;

function Season_Change() {
    if(count === 3) {
        count = 0;
    }
    const chosenImages = images[count];
    bgImage.src = `img/${chosenImages}`;
    document.body.appendChild(bgImage);
    count++;
}

Season_Change();
setInterval(Season_Change, 3000);
