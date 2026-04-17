addEventListener('message',(e)=>{
    const data = e.data?.todo;
    eval(data);
})