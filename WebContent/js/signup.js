$(document).ready(function () {
    $('#registerform').submit(function (event) {
        event.preventDefault()

        var id = $('#id').val()
        var pwd = $('#PWD').val()
        console.log(id, pwd)

        $.post("http://httpbin.org/post",
            {id: id, pwd: pwd},
            function (data) {
                var mymodal = $('#mymodal')
                mymodal.modal()
                mymodal.find('.modal-body').text(data.form.id + '님 회원가입되었습니다')
            }
        )
    });
})