// function Korean() {
//     alert('안녕하세요');
// }
// function American() {
//     alert('안녕하세요');
// }
// function Chinese() {
//     alert('안녕하세요');
// }
function greeting(nation) {
    if(nation ==='k') {
        document.getElementById("result").innerHTML = "안녕하세요";
    }
    else if(nation ==='e') {
        document.getElementById("result").innerHTML = "hello";
    }
    else {
        document.getElementById("result").innerHTML = "nihao";
    }
    console.log(document.write.getElementById("result"));
}