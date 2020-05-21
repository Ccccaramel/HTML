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
    /*
     undefined 表示变量不含有值
     nu 清空变量
    */
}