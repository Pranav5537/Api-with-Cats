
document.getElementById("next").addEventListener("click",getData)

let image = document.getElementById("image")


async function getData()
{

    try{
        const res = await fetch("https://api.thecatapi.com/v1/images/search ");

        const data = await res.json();       
    
        console.log(data[0].url);

    
    //  variable to display image in DOM

        output =`${data[0].url}`    
        document.querySelector("#image").src = output ;

    } catch (error){
        console.log(error, " unable to fetch data")
    }
    
}
