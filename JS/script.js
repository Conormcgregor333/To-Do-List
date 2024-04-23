
let input_bar=document.getElementById("input_text")
let ul_list=document.getElementById("list")
let del_all=document.getElementById("deleteList")
let itmes_array=[]
let z=document.getElementById("lists")
document.getElementById("add_item").addEventListener("click",function(){
    if(input_bar.value!="")
    {
        itmes_array.push(input_bar.value)
        addToList()
    }
    else{
        alert("Please enter some item to add to list.")
    }
    input_bar.focus()
})
/* -----------------adding to list and array---------------------- */
const addToList=()=>{
    let entered=input_bar.value
    ul_list.innerHTML+=`<li><input type="checkbox">${entered}</li>`
    input_bar.value=""
    
}
/* -----------delete all------------------------------------------------ */
del_all.addEventListener("click",function()
{
    
    if(itmes_array.length==0)
    {
        alert("No items to delete.")
    }
    else{
        const conf=confirm("Do you really want to clear the list?")
    if(conf)
    {
        ul_list.innerText=null
        itmes_array=[]
       setTimeout(() => {
        alert("The list has been cleared.")
       }, 500);
    }
    }
    
})

/* -------------------Delete on check-------------------------------*/

let x=document.getElementById("list")
x.addEventListener("click",(event)=>{
    if(event.target.tagName==='INPUT' && event.target.type==='checkbox')
    {
       /*  console.log(itmes_array) */
        let listitem=event.target.parentElement
        let it=event.target.parentElement.innerText
        if(event.target.checked)
        {
            
            setTimeout(() => {
                listitem.remove()
            }, 300);
           delfromarray(it)
           /* console.log(itmes_array) */
        }
    }
})
/* ----------delete from array---------------------------------------- */
const delfromarray=(it)=>{
for(let i=0;i<itmes_array.length;i++)
{
    if(itmes_array[i]==it)
    {
        itmes_array.splice(i,1)
    }
}
} 


