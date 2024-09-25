'use strict'
var gElCanvas
var gCtx

function onInIt() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
}


function renderMeme() {    
    const imgUrl = getSelectedUrl()
    
    const image = new Image(60, 60) 
    image.onload =  drawMeme

    image.src = imgUrl
  
    gCtx.textAlign = 'center' 
    gCtx.fillStyle = 'white'
    gCtx.font = '20px serif'
   
}

function drawMeme() {
    gCtx.drawImage(this, 0, 0)
    const meme = getMeme()
    const lineOnTop = meme.lines[0].txt
    gCtx.fillText(lineOnTop, 120, 30)
}