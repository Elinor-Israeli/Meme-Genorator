'use strict'


function onInIt() {
    renderMeme()
}


function renderMeme() {
    const meme = getMeme()
    console.log(meme);
    
    const lineOnTop = meme.lines[0].txt
    console.log(lineOnTop);

    const img = getSelectedUrl()
    console.log(img);


    const elCanvas = document.querySelector('.canvas-container')
    const strHTML =  `<h3>${lineOnTop}<h3> <img src="${img}">`

    elCanvas.innerHTML = strHTML
}