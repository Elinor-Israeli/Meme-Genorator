'use strict'
var gElCanvas
var gCtx

function onInIt() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    gElCanvas.addEventListener('click', function(ev) {
        const idx = selectClickedLine(ev.offsetX, ev.offsetY);
        if (idx != -1) {
            setSelectedLineIdx(idx)
        }
        renderMeme()
    }, false);
    
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
    gCtx.font = `${line.size}px mont`
    gCtx.fillText(line.txt, x, y)

    const rectX = x-10
    const rectY = y-20
    const width = line.size*line.txt.length*0.5
    const height = line.size*1.5


    if(getMeme().selectedLineIdx === idx){
        drawRect(rectX, rectY, width, height)
    }
    setLineCoord(idx,rectX, rectY, width, height)
    
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

function drawRect(x, y, width, height) {
    gCtx.beginPath()
    gCtx.strokeStyle = 'black'

    gCtx.lineWidth = 3
    gCtx.rect(x, y, width, height)
   
    gCtx.stroke()
    
}
