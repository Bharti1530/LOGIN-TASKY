$(document).ready(function () {
    $('#loginform').on('submit', function (e) {
        e.preventDefault();


        var email = $('#email').val();
        var password = $('#password').val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/api/login',
            data: {
                email: "admin@togoteams.com",
                password: "12345678"
            },
            success: function (response) {
                console.log(response);


                if (response.status == true) {
                    $('#result').html('<div class="alert alert-success">Login successful!</div>');

                    localStorage.setItem('loggedIn', 'true');
                    localStorage.setItem('token', response.data.token);

                    window.location.href = '/Tasky Website/index.html'
                } else {
                    $('#result').html('<div class="alert alert-danger">Login failed.</div>');
                }
            }

        });
    });
});


// Log out and clear local storage
localStorage.removeItem('loggedIn');
localStorage.removeItem('email');

// Check if the user is already logged in and redirect to the dashboard
$(document).ready(function () {
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = '/Tasky Website/index.html';
    }
});
