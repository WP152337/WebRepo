function check() {
    if (document.getElementById("age").value >= 16 && document.getElementById("age").value <= 69) {
        if (document.getElementById("male").checked) {
            if (document.getElementById("weight").value < 50) {
                document.write('체중 미달');
            }
            else document.write('헌혈 가능합니다');
        }
        else if (document.getElementById("female").checked) {
            if (document.getElementById("weight").value < 45) {
                document.write('체중 미달');
            }
            else document.write('헌혈 가능합니다');
        }
    }
    else document.write('연령 부적합');
}