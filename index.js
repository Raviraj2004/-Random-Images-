let src1 = "https://source.unsplash.com/all/300x300";
// let src1 = "https://random.imagecdn.app/500/150";

let div = document.querySelector("#div");
let button = document.querySelector("button");
// div.innerHTML = "hii raviraj"

let urlData = async ()=>{
    let value = await fetch(src1);
    
    let urlValue = value.url;
    div.src = urlValue
    // let data = await value.json();
    console.log(urlValue)
}



console.log(urlData())


button.addEventListener('click',()=>{
    urlData()
})
