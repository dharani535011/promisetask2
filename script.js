const button=document.createElement("div")
const but=document.createElement("div")
but.id="but"
button.id="button"
button.setAttribute("onclick","block()")
const popup=document.createElement("div")
popup.id="popup"
popup.innerHTML=`<h4 id="h4"></h4><h4 id="h3"></h4><span id="span">&#128514&#128517</span>`
const cancel=document.createElement("button")
cancel.setAttribute("onclick","none()")
const box=document.createElement("div")
box.id="box"

const para=document.createElement("h1")
para.innerText="Click Me..."
const text=document.createElement("h3")
text.innerText="If You Bored"
const note=document.createElement("h4")
note.innerText="I Have a Joke For You"
cancel.id="cancel"
cancel.innerText="ok"
cancel.className="btn btn-success"
const root=document.getElementById("root")
root.appendChild(but)
but.appendChild(button)
box.appendChild(popup)
root.appendChild(box)
popup.appendChild(cancel)
button.appendChild(text)
button.appendChild(para)
button.appendChild(note)


function block(){
    // console.log("hbjb")
    const url = 'https://official-joke-api.appspot.com/random_joke';
fetch(url)
.then(res=> res.json())
.then((data)=>{
    // console.log(data)
   document.getElementById("box").style.display="block"
   document.getElementById("but").style.display="none"
   document.getElementById("h4").innerText=data.setup
   document.getElementById("h3").innerText=data.punchline
    
})
.catch(err=>console.log(err))
}
// &#128512

function none(){
    document.getElementById("box").style.display="none"
   document.getElementById("but").style.display="block"

}


// https://official-joke-api.appspot.com/random_joke

