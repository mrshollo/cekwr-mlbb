function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const mrsh = `<a href="https://pacific-pedia.id/" target="_blank">pacificpedia</a>`;
    const mrshIG = `<a href="https://www.instagram.com/marshep_ollo9/" target="_blank">marshep_ollo9</a>`;
    const mrshWA = `<a href="https://api.whatsapp.com/send?phone=6289506667156" target="_blank">mrshollo</a>`;

    const msg1 = `<p class="animation mb-0 text-truncate">Topup Game Dan Beli Followers Murah Di ${mrsh}</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">IG: ${mrshIG} / WA: ${mrshWA}</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Dijamin Aman, Legal, Terpercaya, Dan Pastinya Murah!</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Stay Healthy`;
    const msg5 = `<p class="animation mb-0 text-truncate">Thanks For Visit My Web</p>`;

    let arrayEl = [msg1, msg2, msg3, msg4, msg5];
    let arrayMax = 5;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-K0D3NY4-34');