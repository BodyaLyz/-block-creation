function blockcreation() {
    for (let i = 1; i <= 20; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.height = "50px";
        newDiv.style.width = "50px";
        newDiv.style.backgroundColor = randomColor();
        newDiv.innerText = i;
        newDiv.style.color = randomColor();
        document.body.append(newDiv);

    }

}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + " " + g + " " + b + ")";
};

