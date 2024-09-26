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
   const txt = getSelectedText()
   const elInput = document.querySelector('.line')
   elInput.value = txt  
}

function drawText(idx, line, y, x = 200) {
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px serif`
    gCtx.fillText(line.txt, x, y)

    if(getMeme().selectedLineIdx === idx){
        drawRect(x, y,line.size, line.txt.length)
    }
}

function drawMeme() {
    gCtx.drawImage(this, 0, 0)
    const meme = getMeme()

    const topLineY = 30
    const bottomLineY = 490

    // gCtx.textAlign = 'center'
    drawText(0,meme.lines[0], topLineY)
    drawText(meme.lines.length-1,meme.lines[meme.lines.length-1], bottomLineY)

    if(meme.lines.length > 2){
       const gapLine = (bottomLineY - topLineY) / (meme.lines.length - 1)
        for(let i=1;i < meme.lines.length-1; i++){
          const positionLine =  topLineY + gapLine*i
          drawText(i, meme.lines[i] , positionLine)
        }
    }
}

function onSetLineTxt() {
    const elLine = document.querySelector('.line')
    setLineTxt(elLine.value)
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

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onAddLine(){
    addLine()
    renderMeme()
}

function onChangeLine(){
    changeLine()
    renderMeme()
}

function drawRect(x, y,fontSize, textLength) {
    gCtx.beginPath()
    gCtx.strokeStyle = 'black'

    gCtx.lineWidth = 3
    gCtx.rect(x-10, y-20,fontSize*textLength*0.5, fontSize*1.5)
   
    gCtx.stroke()
    
}

