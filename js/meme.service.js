'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'first line',
            size: 20,
            color: 'red'
        },
        {
            txt: 'second line',
            size: 20,
            color: 'red'
        }
    ]
}


function getMeme() {
    return gMeme
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function getSelectedUrl() {
    const selectedImgId = gImgs.find(img => img.id === gMeme.selectedImgId)
    return selectedImgId.url
}

function setLineTxt(txt) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = txt
}

function setColor(color) {
    gMeme.lines[0].color = color
}

function increaseFont() {
    gMeme.lines[0].size += 5
}

function decreaseFont() {
    gMeme.lines[0].size -= 5
}

function addLine() {
    gMeme.lines.push( {
        txt: 'line',
        size: 20,
        color: 'red'}) 
}

function changeLine(){
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
}
