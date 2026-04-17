

window.addEventListener("DOMContentLoaded",async ()=>{
    const my_hash = window.location.hash.substring(1);
    if(my_hash === 'getStarted'){
        try{
            await fetch('https://gta6.com/game');
        }catch{}
        console.log('game starting...')
        if(window.location.hash.substring(1) === 'win'){
            alert(1337);
        }
    }else{
        console.log('You cannot win this game.')
    }
})