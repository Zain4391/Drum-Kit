const btns = document.getElementsByClassName('drum');
const btnArray = Array.from(btns);
const sound_scrc = ['./sounds/tom-1.mp3', './sounds/tom-2.mp3', './sounds/tom-3.mp3', './sounds/tom-4.mp3',
    './sounds/snare.mp3', './sounds/kick-bass.mp3', './sounds/crash.mp3'];

function makeSound(key){
    if(key === 'w'){
        const audio = new Audio (sound_scrc[0]);
        audio.play();
    }
    else if(key === 'a'){
        const audio = new Audio (sound_scrc[1]);
        audio.play();
    }
    else if(key === 's'){
        const audio = new Audio (sound_scrc[2]);
        audio.play();
    }
    else if(key === 'd'){
        const audio = new Audio (sound_scrc[3]);
        audio.play();
    }
    else if(key === 'j'){
        const audio = new Audio (sound_scrc[4]);
        audio.play();
    }
    else if(key === 'k'){
        const audio = new Audio (sound_scrc[5]);
        audio.play();
    }
    else if(key === 'l'){
        const audio = new Audio (sound_scrc[6]);
        audio.play();
    }
}

function animate(key){
    const activeBtn = document.querySelector(`.${key}`);
    activeBtn.classList.add('pressed');

    setTimeout(() => {
        activeBtn.classList.remove('pressed');
    },100);
}


btnArray.forEach(btn => {
    btn.addEventListener('click',() => {
        makeSound(btn.innerHTML);
        animate(btn.innerHTML);
    });
    
});

document.addEventListener('keypress',(event) => {
    makeSound(event.key);
    animate(event.key);
});
