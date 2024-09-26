'use strict'
var gElCanvas
var gCtx

var leftX = 10
var middleX = 200
var rightX = 500

function onInIt() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    document.querySelector('.font-family').addEventListener('change', (event) => {
        setFont(event.target.value)
        renderMeme()
    });
    gElCanvas.addEventListener('click', function (ev) {
        const idx = selectClickedLine(ev.offsetX, ev.offsetY);
        if (idx != -1) {
            setSelectedLineIdx(idx)
        }
        renderMeme()
    }, false);

    renderMeme()
    renderGallery()

    window.addEventListener('resize', function() {        
        renderMeme()
    })
}


function renderMeme() {
    const imgUrl = getSelectedUrl()

    const image = new Image(gElCanvas.width, gElCanvas.height)
    image.onload = drawMeme
    image.src = imgUrl
    if(getMeme().lines.length > 0){
        const txt = getSelectedText()
        const elLine = document.querySelector('.line')
        elLine.value = txt

        const font = getSelectedFont()
        const elFont = document.querySelector('.font-family')
        elFont.value = font

        const color = getSelectedColor()
        const elColor = document.querySelector('.fill-color')
        elColor.value = color
    }
   
}

function drawText(idx, line, y) {
    const width = line.size * line.txt.length * 0.5
    const height = line.size * 1.5
    const x = calX(line.align, width)

    gCtx.fillStyle = line.color
    gCtx.strokeStyle = 'black'
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.fillText(line.txt, x, y)

    const rectX = x - 10
    const rectY = y - 20

    if (getMeme().selectedLineIdx === idx) {
        drawRect(rectX, rectY, width, height)
    }
    setLineCoord(idx, rectX, rectY, width, height)
}

function drawMeme() {
    resizeCanvas()
    gCtx.drawImage(this, 0, 0)
    const meme = getMeme()

    const topLineY = 30
    const bottomLineY = 490

    // gCtx.textAlign = 'center'
    if (meme.lines.length > 0) {
        drawText(0, meme.lines[0], topLineY)
        if (meme.lines.length > 1) {
            drawText(meme.lines.length - 1, meme.lines[meme.lines.length - 1], bottomLineY)
        }
    }


    if (meme.lines.length > 2) {
        const gapLine = (bottomLineY - topLineY) / (meme.lines.length - 1)
        for (let i = 1; i < meme.lines.length - 1; i++) {
            const positionLine = topLineY + gapLine * i
            drawText(i, meme.lines[i], positionLine)
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

function onAddLine() {
    addLine()
    renderMeme()
}

function onChangeLine() {
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

function calX(align, width) {
    let x
    switch (align) {
        case 'right':
            x = rightX - width
            break
        case 'middle':
            x = middleX
            break
        case 'left':
            x = leftX
            break
    }
    return x
}

function onSetAlign(align) {
    setAlign(align)
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.clientWidth / 2
}
