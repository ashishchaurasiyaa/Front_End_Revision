document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('.body');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (e.target.id === 'grey') {
                document.body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'white') {
                document.body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'blue') {
                document.body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'yellow') {
                document.body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'green') {
                document.body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'pink') {
                document.body.style.backgroundColor = e.target.id
            }
            if (e.target.id === 'red') {
                document.body.style.backgroundColor = e.target.id
            }
        });
    });
});