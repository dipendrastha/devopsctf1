

window.addEventListener("DOMContentLoaded",async ()=>{

    const text = document.getElementById('text');
    const content = document.getElementById('content');

    text.addEventListener('input',async (e)=>{
        const value = e.target.value;
        
        if(value.length <= 14){
            content.innerHTML = value;
        }
         if(window.isAdmin){
            alert(1337)
        }
    })

   
})