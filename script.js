const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
});

const headelement = document.querySelectorAll('.hidden');
headelement.forEach((element) => {
    observer.observe(element);
});
// submit data to sheets
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('#Submit').innerHTML = 'Sending...';
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbyLv_WAbkkTbRuRgEEtC53vg0WXKSVplaO1OgRk-PleBS4uBGFxuCFxxusqbbQizwfoLQ/exec', {
        method: 'POST',
        body: data
    }).then(res => res.text())
        .then(data => {
            document.querySelector('#Submit').innerHTML = 'Submit';
        })
    form.reset();
    window.alert("Success! Your message has been sent.");
});

