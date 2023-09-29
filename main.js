var a=[];
var n=parseInt(prompt("enter the size of the array"));

for (let i=0; i<n;i++){
    a[i]=parseInt(prompt("enter the number"));
}
document.write("given array is="+a+"<br>");

var b=[];
var n=parseInt(prompt("enter the size of the array"));

for (let i=0; i<n;i++){
    b[i]=parseInt(prompt("enter the number"));
}
document.write("given array is="+b+"<br>");
c=a+b;
document.write(c);
//document.write(a +","+" "+b);