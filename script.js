let sixnine = new Audio('/sounds/69.wav')
let ania = new Audio('/sounds/a.wav')
let backspace = new Audio('/sounds/backspace.wav')
let d = new Audio('/sounds/d.wav')
let enter = new Audio('/sounds/enter.wav')
let space = new Audio('/sounds/space.wav')
let tab = new Audio('/sounds/tab.wav')

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