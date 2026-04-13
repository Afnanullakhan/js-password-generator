let button = document.getElementsByTagName("button")[0]
let input = document.getElementsByTagName("input")[0]

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower = "abcdefghijklmnopqrstuvwxyz"
let num = "1234567890"
let spel = "!@#$%^&*()_<>?:|{}[]"

let all = upper + lower + num + spel

button.addEventListener("click",()=>{
    let password = ""
    password += upper[Math.floor(Math.random()*upper.length)]
    password += lower[Math.floor(Math.random()*lower.length)]
    password += num[Math.floor(Math.random()*num.length)]
    password += spel[Math.floor(Math.random()*spel.length)]

    for(let i = password.length ; i<14; i++)
    {
        password +=all[Math.floor(Math.random() * all.length)]
    }
    input.value = (password);
})

let copy = () =>{
    let con = confirm("Do you want to copy")
    if(con === true)
    {
        input.select()
        document.execCommand("copy")
        alert("Password copied successfully ⭐")
    }
    else{
        alert("canceled!!")
    }
}