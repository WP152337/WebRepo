function sum() {
    var num = document.getElementById("num").value;
    var sum = 0;
    for(var i=1;i<=num;i++) {
        sum +=i;
    }
    document.getElementById("result").innerHTML =
        "1부터 " + num + "까지의 합은 " + sum + "입니다.";
}