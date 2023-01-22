// Variables
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

// Functions
function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);

    const winNum = win(tMatch, tWr);
    const loseNum = lose(tMatch, tWr);

    let text = "";
    if (isNaN(tMatch) || isNaN(tWr)) {
        text = `Wajib Isi Semua Kolom.`;
        display(text);
    } else if (tMatch < 0 || tWr < 0) {
        text = `Match Tidak Boleh Kurang Dari 0`;
        display(text);
    } else if (tMatch % 1 != 0) {
        text = `Harus Isi Bilangan Bulat`;
        display(text);
    } else if (tWr > 100) {
        text = `WR Tidak Boleh Lebih Dari 100%`;
        display(text);
    } else {
        text = `Total Win: <b>${winNum}</b> Match <br> Total Lose: <b>${loseNum}</b> Match <br>`;
        display(text);
    }
}

function display(text) {
    return resultText.innerHTML = text;
}

function win(tMatch, tWr) {
    return Math.round(tMatch * (tWr / 100));
}

function lose(tMatch, tWr) {
    return Math.round(tMatch - (tMatch * (tWr / 100)));
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {
    checkLS();

    welcomeMsg();
}

function eventListener() {
    hasil.addEventListener("click", res);
}