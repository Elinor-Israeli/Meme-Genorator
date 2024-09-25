'use strict'

var gImgs = [{ id: 1, url: 'meme-imgs/1.jpg', keywords: [] }]

var gMeme = { 
    selectedImgId: 1, 
    selectedLineIdx: 0, 
    lines: [ 
        { 
            txt: 'I sometimes eat Falafel', 
            size: 20, 
            color: 'red' 
        } 
    ] 
} 


function getMeme(){
    return gMeme
}

function selectedImgId(imgId){
    gMeme.selectedImgId = imgId
}

function getSelectedUrl(){
    const selectedImgId = gImgs.find(img => img.id === gMeme.selectedImgId)
    return selectedImgId.url 
}