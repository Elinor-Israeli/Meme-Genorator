'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'first line',
            size: 20,
            color: 'white',
            align : 'middle',
            coordinates: {
                x:0,
                y:0,
                width:0,
                height:0
            }
        },
        {
            txt: 'second line',
            size: 20,
            color: 'white',
            align : 'middle',
            coordinates: {
                x:0,
                y:0,
                width:0,
                height:0
            }
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
    console.log("idx", idx);
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
    gMeme.lines.push({
        txt: 'line',
        size: 20,
        color: 'white',
        align: 'middle'
    })
}

function changeLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
}

function setSelectedLineIdx(idx) {
    gMeme.selectedLineIdx = idx
}

function setLineCoord(idx,x,y, width,height){
   gMeme.lines[idx].coordinates = {
        x: x,
        y: y,
        width: width,
        height: height,
    }
}

function selectClickedLine(clickedX,clickedY){
    console.log(clickedX,clickedY);
    
    for (let i=0; i< gMeme.lines.length; i++) {
        const coordinates = gMeme.lines[i].coordinates
        console.log(i, coordinates)
        if((clickedX >= coordinates.x) &&( clickedX <= coordinates.x+coordinates.width) && (clickedY >= coordinates.y) && ( clickedY <= coordinates.y+coordinates.height) ){
            return i
         }
    }
    return -1
}

function setAlign(align) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].align = align
}

function deleteLine(){
    const idx = gMeme.selectedLineIdx
    gMeme.lines.splice(idx, 1)
    if((idx === gMeme.lines.length) && (gMeme.lines.length != 0)){
        gMeme.selectedLineIdx = gMeme.lines.length - 1
    }
}