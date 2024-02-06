const btnNormal = document.getElementById("btnNormal")
const btnPromise = document.getElementById("btnPromise")
const btnFetch = document.getElementById("btnFetch")
const btnAsyncWait = document.getElementById("btnAsyncWait")

const app = document.getElementById("app")

const saludar = (name) =>
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(() =>
        {
            if(name === ""){
                reject("El nombre no puede estare vacio")
            }else{
                resolve('Hola ${name}')
            }
        }, 2000)
    })
}

btnPromise.addEventListener("click",evt =>{
    cnsole.log("Empieza el proceso")
    saludar("")
    .then (response => {
        write(response)
    })
    .catch(error => {
        write(error)
    })
    console.log("Termina el proceso")  
})

btnAsyncWait.addEventListener("click",async() =>{
    console.log("Empieza el proceso")
    try{
        const resp = await saludar("UPB")
        write(resp)
    }
    catch(error){
        write(error)
    }
    console.log("Termina el proceso") 
})

btnFetch.addEventListener("click", evt =>{
    fetch("http://localhost:8080/tabla.html")
    .then(response => response.text())
    .then(response => write(response))
    .catch(err => console.log(err))
})