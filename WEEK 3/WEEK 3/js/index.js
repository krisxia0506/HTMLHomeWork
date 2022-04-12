var s1 = '2021-12-21';

s1 = new Date(s1.replace(/-/g, "/"));
s2 = new Date();

var days = s2.getTime() - s1.getTime();
var time = parseInt(days / (1000 * 60 * 60 * 24))+1;

document.getElementById("demo").innerHTML = "寒假第"+time+"天";
