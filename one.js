var a = [1,2,3];

function fib(){
    var nu = a.slice(-2);
    var b = nu[0] + nu[1];
    var n = a.push(b); 
    }
   
for(var i=0;i<29;i++){
    fib();
    }       

function par(element,index, array){
    if(element%2===0){
    return element;
        }
    }

var b = a.filter(par);    
var f = b.reduce(function(previousValue,currentValue,index,array)
    {return previousValue+currentValue});  

console.log(f);