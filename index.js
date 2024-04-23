import React from 'react';
import ReactDOM from 'react-dom/client';
const addition=()=>
{
const x=document.getElementById("N1");
const y=document.getElementById("N2");
const Z=parseInt(x.value)+parseInt(y.value);
document.getElementById("ANS").value=Z;
}
const subraction=()=>
{
const x=document.getElementById("N1");
const y=document.getElementById("N2");
const Z=parseInt(x.value)-parseInt(y.value);
document.getElementById("ANS").value=Z;
}
const multiplication=()=>
{
const x=document.getElementById("N1");
const y=document.getElementById("N2"); 
const Z=parseInt(x.value)*parseInt(y.value);
document.getElementById("ANS").value=Z;
}
const division=()=>
{
const x=document.getElementById("N1");
const y=document.getElementById("N2");
const Z=parseInt(x.value)/parseInt(y.value);
document.getElementById("ANS").value=Z;
}
const colorchange=()=>
{
const ANS=document.getElementById("ANS")
if(ANS.style.backgroundColor=="red")
ANS.style.backgroundColor="green";
else ANS.style.backgroundColor="red";
}   
const myfirstelement=<center><h1>CALCULATOR</h1></center>
const mysecondelement=<div><center><label>NO1</label> <input type="number" id="N1" /><br/><br/></center></div>
const mythirdelement=<div><center><label>NO2</label><input type="number" id="N2" /><br/><br/>
<label>ANS</label><input type="number"id="ANS" /><br/><br/>
            <input type="button" value="+" onClick={addition}/>
            <input type="button" value="-" onClick={subraction}/>
            <input type="button" value="X" onClick={multiplication}/>
            <input type="button" value="%" onClick={division}/>
            <input type="button" value="CHG BG" onClick={colorchange}/>
            </center></div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myfirstelement);
const root1 = ReactDOM.createRoot(document.getElementById('abc'));
root1.render(mysecondelement);
const root2 = ReactDOM.createRoot(document.getElementById('def'));
root2.render(mythirdelement);