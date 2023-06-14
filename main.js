let names = ["Ahmed","Mohamed","Osama","Ibrahim","Sherif","Omnia","Salma","Rawan","Shahd","Tasneem"]
let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign="center";
//function to make card
function card(name,years,source)
{
    //elements
    let cardo = document.createElement("div");
    let title = document.createElement("h2");
    let age = document.createElement("p");
    let image = document.createElement("img")
    //style
    cardo.style.cssText=`width:200px;background-color:#222;color:darkgoldenrod;padding:13px;border-radius:8px;margin:5px;display:inline-block;`
    image.style.cssText=`width:100%;`
    //content
    let titleValue = document.createTextNode(name);
    let ageValue = document.createTextNode(years);
    image.src=source;
    title.appendChild(titleValue);
    age.appendChild(ageValue);
    cardo.appendChild(title);
    cardo.appendChild(age);
    cardo.appendChild(image);
    container.appendChild(cardo);
}
for(let i =0 ;  i<names.length;i++){
    if(i<=4){
        card(names[i],"20 Years Old","man.png");
    }
    else {
        card(names[i],"20 Years Old","woman.png");
    }
}



