$(document).ready(function () {
    $('#clientForm').on('submit', function (event) {
        var isValid = true;

        var password = $('#password').val();
        var confirmPassword = $('#confirm_password').val();

        if (password !== confirmPassword) {
            $('#confirm_password').addClass('is-invalid');
            isValid = false;
        } else {
            $('#confirm_password').removeClass('is-invalid');
        }

        $('#clientForm').find('input, select').each(function () {
            if (!this.checkValidity()) {
                $(this).addClass('is-invalid');
                isValid = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (!isValid) {
            event.preventDefault();
        }
    });
});
