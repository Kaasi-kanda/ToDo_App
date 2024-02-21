function addtask(){
    var inp=document.getElementById('inputtask');
    var li=document.getElementById('add');
    if(inp.value.trim() !==""){
        var ne=document.createElement("li");
        ne.innerHTML=inp.value /*'<button class="del"> onclick="deleteTask(this)">Delete</button>';*/
        var t=document.createElement('button');
        t.innerHTML="Delete";
        t.classList.add('custom');
        t.addEventListener('click',function(){
            li.removeChild(ne);
        })
        ne.appendChild(t);
        li.appendChild(ne);
        inp.value="";
    }
}