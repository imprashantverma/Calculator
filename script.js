let one=document.querySelector('#one');
let two=document.querySelector('#two');
let three=document.querySelector('#three');
let four=document.querySelector('#four');
let five=document.querySelector('#five');
let six=document.querySelector('#six');
let seven=document.querySelector('#seven');
let eight=document.querySelector('#eight');
let nine=document.querySelector('#nine');
let zero=document.querySelector('#zero');
let multi=document.querySelector('#multi');
let plus=document.querySelector('#plus');
let minus=document.querySelector('#minus');
let equal=document.querySelector('#equal');
let dot=document.querySelector('#dot');
let divi=document.querySelector('#divi');
let output=document.querySelector('#output');
let ac=document.querySelector('#ac');
let modulo=document.querySelector('#percentage');
let ce=document.getElementById('ce');

function removeBorder(temp){
    temp.style.border="0px solid grey";
}

one.addEventListener('click',function(){
    output.textContent+='1';
    one.style.border="2px solid grey";
    setTimeout(removeBorder,150,one);
       
});
two.addEventListener('click',function(){
    output.textContent+='2';
    two.style.border="2px solid grey";
    setTimeout(removeBorder,150,two);
});
three.addEventListener('click',function(){
    output.textContent+='3';
    three.style.border="2px solid grey";
    setTimeout(removeBorder,150,three);
});
four.addEventListener('click',function(){
    output.textContent+='4';
    four.style.border="2px solid grey";
    setTimeout(removeBorder,150,four);
});
five.addEventListener('click',function(){
    output.textContent+='5';
    five.style.border="2px solid grey";
    setTimeout(removeBorder,150,five);
});
six.addEventListener('click',function(){
    output.textContent+='6';
    six.style.border="2px solid grey";
    setTimeout(removeBorder,150,six);
});
seven.addEventListener('click',function(){
    output.textContent+='7';
    seven.style.border="2px solid grey";
    setTimeout(removeBorder,150,seven);
});
eight.addEventListener('click',function(){
    output.textContent+='8';
    eight.style.border="2px solid grey";
    setTimeout(removeBorder,150,eight);
});
nine.addEventListener('click',function(){
    output.textContent+='9';
    nine.style.border="2px solid grey";
    setTimeout(removeBorder,150,nine);
});
zero.addEventListener('click',function(){
    output.textContent+='0';
    zero.style.border="2px solid grey";
    setTimeout(removeBorder,150,zero);
});
dot.addEventListener('click',function(){
    let str = JSON.stringify(output.textContent);
    if(str[str.length-2] == '-' ||str[str.length-2] == '.' ||str[str.length-2] == '*' ||str[str.length-2] == '/' ||str[str.length-2] == '%'||str[str.length-2] == '+'){
        output.textContent='';
        for(let i = 1 ; i < str.length-2;i++)
            output.textContent+=str[i];
        output.textContent+='.';
    }
    else if(output.textContent=='')output.textContent='0.';
    else output.textContent+='.';
    dot.style.border="2px solid grey";
    setTimeout(removeBorder,150,dot);
});
plus.addEventListener('click',function(){   
    
    let str = JSON.stringify(output.textContent);
    if(str[str.length-2] == '-' ||str[str.length-2] == '.' ||str[str.length-2] == '*' ||str[str.length-2] == '/' ||str[str.length-2] == '%'||str[str.length-2] == '+'){
        output.textContent='';
        for(let i = 1 ; i < str.length-2;i++)
            output.textContent+=str[i];
        output.textContent+='+';
    }
    else if(output.textContent=='')output.textContent='0+';
    else output.textContent+='+';
    
});
minus.addEventListener('click',function(){

    let str = JSON.stringify(output.textContent);
    if(str[str.length-2] == '-' ||str[str.length-2] == '.'||str[str.length-2] == '%' ||str[str.length-2] == '*' ||str[str.length-2] == '/' ||str[str.length-2] == '+'){
        str[str.length-2]='+';
        output.textContent='';
        for(let i = 1 ; i < str.length-2;i++)
            output.textContent+=str[i];
        output.textContent+='-';
    }
    else if(output.textContent=='')output.textContent='0-';
    else output.textContent+='-';
});
multi.addEventListener('click',function(){  
    console.log("hey man");
    let str = JSON.stringify(output.textContent);
    if(str[str.length-2] == '-' ||str[str.length-2] == '.' ||str[str.length-2] == '*' ||str[str.length-2] == '%'||str[str.length-2] == '/' ||str[str.length-2] == '+'){
        str[str.length-2]='+';
        output.textContent='';
        for(let i = 1 ; i < str.length-2;i++)
            output.textContent+=str[i];
        output.textContent+='*';
    }
    else if(output.textContent=='')output.textContent='1*';
    else output.textContent+='*';
  
});
equal.addEventListener('click',function(){
    output.textContent=eval(output.textContent);
    if(input.value !=0 && output.textContent=='') {
        output.textContent=eval(input.value);
        input.value='';
    }
  
});
divi.addEventListener('click',function(){
    let str = JSON.stringify(output.textContent);
    if(str[str.length-2] == '-' ||str[str.length-2] == '.' ||str[str.length-2] == '*'||str[str.length-2] == '%' ||str[str.length-2] == '/' ||str[str.length-2] == '+'){
        str[str.length-2]='+';
        output.textContent='';
        for(let i = 1 ; i < str.length-2;i++)
            output.textContent+=str[i];
        output.textContent+='/';
    }
    else if(output.textContent=='')output.textContent='0';
    else output.textContent+='/';
  
});
ac.addEventListener('click',function(){
    output.textContent='';
    ac.style.border="2px solid red";
    setTimeout(removeBorder,150,ac);
    
});
ce.addEventListener('click',function(){
    let str = JSON.stringify(output.textContent);
    output.textContent='';
        for(let i = 1 ; i < str.length-2;i++)
            output.textContent+=str[i];

});
modulo.addEventListener('click',function(){
    let str = JSON.stringify(output.textContent);
    if(str[str.length-2] == '-' ||str[str.length-2] == '*'||str[str.length-2] == '%' ||str[str.length-2] == '/' ||str[str.length-2] == '+'){
        output.textContent='';
        for(let i = 1 ; i < str.length-2;i++)
            output.textContent+=str[i];
        output.textContent+='%';
    }
    else if(output.textContent=='')output.textContent='0%';
    else output.textContent+='%';
});


