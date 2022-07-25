let sixnine = new Audio('69.wav')
let ania = new Audio('a.wav')
let backspace = new Audio('backspace.wav')
let d = new Audio('d.wav')
let enter = new Audio('enter.wav')
let space = new Audio('space.wav')
let tab = new Audio('tab.mp3')

document.body.onkeydown = (e) => {
    if((e.keyCode === 54)||(e.keyCode === 57)){

        e.preventDefault();
        sixnine.play()

    } else if(e.keyCode === 65){
        e.preventDefault();
        ania.play()
    } else if(e.keyCode === 8){
        e.preventDefault();
        backspace.play()
    } else if(e.keyCode === 68){
        e.preventDefault();
        d.play()
    } else if(e.keyCode === 13){
        e.preventDefault();
        enter.play()
    } else if(e.keyCode === 32){
        e.preventDefault();
        space.play()
    } else if(e.keyCode === 9){
        e.preventDefault();
        tab.play()
    } else {
        return;
    }
}