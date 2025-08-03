function photo()
{
    const input =document.querySelector('#searchbar').value;
    if(!input){
        alert("pls enter a word");
    }
    fetch(`https://pixabay.com/api/?key=your_api_key=${input}&image_type=photo`).then((res)=>{
        if(!res.ok){
            throw new Error("new found");
        }
        console.log(res);
        return res.json();
    }).then((data)=>
    {
        console.log(data);
        const resultdiv=document.querySelector('#resultdiv');
        const images=data.hits;//array tha 
        console.log(images);
        images.map((image)=>{
            const li=document.createElement("li");//lidt item creation

            li.classList.add("li");//class dal gyi 
            const ul=document.querySelector("#photos")
            ul.append(li);//insertion of li in ul 
            li.innerHTML=
            ` <img height=210px width=210px src="${image.largeImageURL}"</img>
              <h3>❤️${image.likes} 👁️${image.views} </h3>
                `;
        })

    }).catch((err)=>{
        alert(err,"this is my msg")

    });

}