console.log("script runing")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburgar').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo')
})