const music= document.querySelector("audio")
const btn = document.querySelector("button")
btn.innerHTML="play"

btn.onclick=()=>{
    if(music.paused){
        music.play()
        music.play()
        btn.style.background="red"
        btn.innerHTML="stop"
    }else{
        music.pause()
        btn.style.background="#1852de"
        btn.innerHTML="continue"
    }
}

