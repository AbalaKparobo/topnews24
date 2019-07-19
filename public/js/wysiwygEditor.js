window.addEventListener('load', function(){
    let editor = wysiwygBody.document;
    editor.designMode = 'on';

    let boldButton = document.querySelector('#bold-button');
    boldButton.addEventListener("click", function(){
        editor.execCommand("Bold", false, null);
    }, false)

    let italicButton = document.querySelector('#italic-button');
    italicButton.addEventListener("click", function(){
        editor.execCommand("Italic", false, null);
    }, false)

    let deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener("click", function(){
        editor.execCommand("strikeThrough", false, null);
    }, false)

    let supButton = document.querySelector('#sup-button');
    supButton.addEventListener("click", function(){
        editor.execCommand("SuperScript", false, null);
    }, false)

    let subButton = document.querySelector('#sub-button');
    subButton.addEventListener("click", function(){
        editor.execCommand("SubScript", false, null);
    }, false)

    let OLButton = document.querySelector('#number-list-button');
    OLButton.addEventListener("click", function(){
        editor.execCommand("InsertOrderedList", false, "newOL" + Math.round(Math.random() * 50));
    }, false)
    
    let ULButton = document.querySelector('#unordered-list-button');
    ULButton.addEventListener("click", function(){
        editor.execCommand("InsertUnorderedList", false, "newUL" + Math.round(Math.random() * 50));
    }, false)
    
    let fontColor = document.querySelector('#font-color-picker');
    fontColor.addEventListener("change", function(event){
        editor.execCommand("ForeColor", false, event.target.value);
    }, false)

    let highlightColor = document.querySelector('#highlight-text-color-picker');
    highlightColor.addEventListener("change", function(event){
        editor.execCommand("BackColor", false, event.target.value);
    }, false)

    let setFontType = document.querySelector('#font-family-changer');
    setFontType.addEventListener("change", function(event){
        editor.execCommand("FontName", false, event.target.value);
    }, false)
    
    let setFontSize = document.querySelector('#font-size-changer');
    setFontSize.addEventListener("change", function(event){
        editor.execCommand("FontSize", false, event.target.value);
    }, false)
    
    let createLinkButton = document.querySelector('#create-link-button');
    createLinkButton.addEventListener("click", function(){
        let url = prompt("Enter link url here", "http://")
        editor.execCommand("createLink", true, url);
    }, false)

    let unlinkButton = document.querySelector('#unlink-button');
    unlinkButton.addEventListener("click", function(){
        editor.execCommand("unLink", false, null);
    }, false)
    
    let undoButton = document.querySelector('#undo-button');
    undoButton.addEventListener("click", function(){
        editor.execCommand("undo", false, null);
    }, false)

    let redoButton = document.querySelector('#redo-button');
    redoButton.addEventListener("click", function(){
        editor.execCommand("redo", false, null);
    }, false)
}, false)