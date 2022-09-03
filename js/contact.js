$(function () {

    var form = $('#contact-form');

    $(form).submit(function (e) {
        e.preventDefault();
        var params = {
            from_name: document.getElementById('name').value,
            email_id: document.getElementById('email_id').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        }
        $(".load-div").css('display', 'flex');
        emailjs.send('service_5i1xg08', 'template_9r30nre', params).then((res => {
            $(".load-div").css('display', 'none');
            alert('Your Mail Sent Successfully!')
            window.location.reload()
        }))
    });

})
