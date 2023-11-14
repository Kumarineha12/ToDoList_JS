const listBox=document.getElementById("box");
const list=document.getElementById("list");
    function AddList(){
     if(listBox.value===''){
        alert("Pleaset write anything");
     }else{
        let li=document.createElement("li");
        li.innerHTML=listBox.value ;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
     }
     listBox.value="";
     savedata();
    }
    list.addEventListener("click",function(e){
        if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
        }
    },false)
    function savedata(){
        localStorage.setItem("data",list.innerHTML);
    }
    function showList(){
        list.innerHTML=localStorage.getItem("data");
    }
    showList();