
/*
The syntax of event listener is that :-

take the variable assigned to represent the id of that button.addEventKistener("funtion which you want to perform like click",the actual funtion () {
})

*/
let myLeads = []
let oldLeads = []


//to convert string to array in javascript we use JSON.parse
//to convert array to string we use JSON.stringify
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.this-is-the-pushed-string.com")
// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof myLeads)


// TRUTHY AND FALSY statements
// All the falsy statments:
// false
// 0
// ""
// null -> how developers tell emptiness to JS
// undefined -> how JS tells developers emptiness
// NaN
//CHECKING IF THE VALUE IS TRUE OR FALSE
// 0 is a falsy value but 0 in an array is a truthy value
// f , t,t,f,f,f




let inputEl = document.getElementById("input-el")
let listEl = document.getElementById("list-el")

const saveBtn = document.getElementById("save")
const resetBtn = document.getElementById("reset")
const tabBtn = document.getElementById("tab-btn")


const LeadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(LeadsfromLocalStorage)


if (LeadsfromLocalStorage) {
    myLeads = LeadsfromLocalStorage
    render(myLeads)
}

saveBtn.addEventListener("click",function(){
    console.log("The save button was clicked")
    //myLeads.push("www.awsomelead.com")
    myLeads.push(inputEl.value)
    //myLeads.value will get the value entered into the textbox inputEl and push it into myLeads
    //console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})

resetBtn.addEventListener('click',function(){
    console.log("Double click (dblclick) not clicked so we are using single click only")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


 tabBtn.addEventListener("click",function(){        
     
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)

    })    
})

function render(leads) {

    let listItems = ""
    for(let i=0;i<leads.length;i++)
    {
        //listItems += "<li><a href = '#' target ='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a target = '_blank' href =' ${leads[i]}'>
         ${leads[i]} 
        </a>
        </li>`

    }
    listEl.innerHTML = listItems
}


// localStorage.setItem("myleads","www.string1.com")
// console.log(localStorage.getItem("myleads"))
// localStorage.setItem("myleads","www.string2.com")
// console.log(localStorage.getItem("myleads"))
// localStorage.setItem("myleads","www.string3.com")
// console.log(localStorage.getItem("myleads"))

// localStorage.clear()



