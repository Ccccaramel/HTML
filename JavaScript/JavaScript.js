function test1() {
    console.log("ok");
    alert("PASS!");
}
function test2() {
    var html1 = "<div style='color: #FFD700'>"+"change"+"</div>";
    document.getElementById("div13-1").style.color="#66ccff";
    document.getElementById("div13-2").innerHTML=html1;
}
function test3() {
    var html2 = "<div style='color: #aaaacc'>"+"add"+"</div>";
    document.getElementById("div13-3").innerHTML+=html2;
}
function info() {
    var country="CN";
    var person={
        firstname:"John",
        lastname:"Doe",
        age:1,
    };  // 对象
    var id=123,nu=null;
    var car = ["Saab","volvo","BMW"],bike;
    var boo=new Boolean();  // 声明变量类型
    alert("country:"+country+"\n"+
        "person:"+person["firstname"]+","+person["lastname"]+","+person["age"]+"\n"+
        "id:"+id+"\n"+
        "nu:"+nu+"\n"+
        "car:"+car+"\n"+
        "bike:"+bike+"\n"+
        "boo:"+boo);
    var fname=person.firstname;
    /*
     undefined 表示变量不含有值
     null 清空变量
    */
}
function dis() {
    alert(document.getElementById("num1").value+" "+document.getElementById("num2").value)
}
function count(num1,num2) {
    alert(num1+num2);
}
function oncont() {
    alert("右击鼠标!");
}
function ondb() {
    alert("双击鼠标!");
}
function mousedown() {
    document.getElementById("div13-5").style="background-color:#aaccff;";
}
function mouseenter() {
    document.getElementById("div13-5").style="background-color:#ffff11;";
}
function mouseleave() {
    document.getElementById("div13-5").style="background-color:#aaaacc;";
}
/**
 * 局部变量
 *   在 JavaScript 函数内部声明的变量(使用 var )是局部变量,所以只能在函数内部访问它,只要函数运行完毕,本地变量就会被删除
 * 全局变量
 *   在函数外声明的变量,网页上所有的脚本和函数都能访问它,在页面关闭后被删除
 */
var var1=1;  // 不可配置全局属性
var2=2;  // 未使用 var 声明,可配置全局属性
console.log(this.var1);  // 1
console.log(window.var1);  // 1

console.log(delete var1);  // false 无法删除
console.log(var1);  // 1

delete  var2;
console.log(delete var2);  // 删除
console.log(var2);  // 报错变量未定义