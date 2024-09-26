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

function getSelectedText() {
    const idx = gMeme.selectedLineIdx
    return gMeme.lines[idx].txt
}

function setLineTxt(txt) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = txt
}

function setColor(color) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].color = color
}

function increaseFont() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size += 5
}

function decreaseFont() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size -= 5
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
