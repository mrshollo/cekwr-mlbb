// Variables
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

// Functions


function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);
    const lsReq = parseFloat(document.querySelector("#lsReq").value);

    const totalNum = total(tMatch, tWr, lsReq);
    const minLoseNum = minLose(tMatch, tWr, lsReq);
    let text = "";

    if (isNaN(tMatch) || isNaN(tWr) || isNaN(lsReq)) {
        text = `Wajib Isi Semua Kolom.`;
        display(text);
    } else if (lsReq % 1 != 0 || tMatch % 1 != 0) {
        text = `Harus Bilangan Bulat`;
        display(text);
    } else if (tMatch < 0 || tWr < 0 || lsReq < 0) {
        text = `Tidak Boleh Kurang Dari 0`;
        display(text);
    } else if (totalNum < 0) {
        text = `Minimal Anda Harus Lose Streak <b>${minLoseNum}</b> Kali`;
        display(text);
    } else if (tWr > 100) {
        text = `WR Tidak Boleh Lebih Dari 100%`;
        display(text);
    } else {
        text = `Jika Anda Lose Streak Sebanyak <b>${lsReq}</b> Kali, Maka Winrate Anda Akan Menjadi <b>${totalNum}%</b>`;
        display(text);
    }
}

function display(text) {
    return resultText.innerHTML = text;
}

function total(tMatch, tWr, lsReq) {
    const win = Math.floor(tMatch * (tWr / 100) - lsReq) / tMatch * 100;
    return win.toFixed(1);
}

function minLose(tMatch, tWr) {
    return Math.ceil(tMatch * tWr / 100)
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