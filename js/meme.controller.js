'use strict'
var gElCanvas
var gCtx

function onInIt() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
}


function renderMeme() {
    const imgUrl = getSelectedUrl()

    const image = new Image(60, 60)
    image.onload = drawMeme
    image.src = imgUrl
}

function drawMeme() {
    gCtx.drawImage(this, 0, 0)
    const meme = getMeme()
    const lineOnTop = meme.lines[0].txt
    // gCtx.textAlign = 'center'
    gCtx.fillStyle = meme.lines[0].color
    gCtx.font = `${meme.lines[0].size}px serif`
    gCtx.fillText(lineOnTop, 120, 30)
}

function onSetLineTxt() {
    const elLineOne = document.querySelector('.line-one')
    setLineTxt(elLineOne.value)
    renderMeme()
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onSetFillColor(color) {
    setColor(color)
    renderMeme()
}

function onIncreaseFont(){
    console.log('inc');
    
     increaseFont()
    
    renderMeme()
}

function onDecreaseFont(){
    decreaseFont()
    renderMeme()
}


