

window.addEventListener("DOMContentLoaded",async ()=>{
    const container = document.getElementById('content');
    const input = new URLSearchParams(window.location.search);
    const comment = input.get('comment') || 'ggwp';
    const filter = [';','\n'];
    if(comment.length > 1){
        console.log('Length too long');
        return;
    }
    if(!filter.includes(comment)){
        container.innerHTML = `<svg/onload="1${comment}alert(1337)">`;
    }else{
        console.log("Hacking attempt")
    }
    
})