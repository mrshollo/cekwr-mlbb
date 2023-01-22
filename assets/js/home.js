// Variables
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);
    const wrReq = parseFloat(document.querySelector("#wrReq").value);

    const resultNum = rumus(tMatch, tWr, wrReq);
    const loseNum = rumusLose(tMatch, tWr, wrReq);

    let text = "";
    if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
        text = `Wajib Isi Semua Kolom.`;
        display(text);
    } else if (tMatch < 0 || tWr < 0 || wrReq < 0) {
        text = `Tidak Boleh Kurang Dari 0`;
        display(text);
    } else if (tMatch % 1 != 0) {
        text = `Harus Bilangan Bulat`;
        display(text);
    } else if (tWr == 100 && wrReq == 100) {
        text = `Kamu Perlu <b>0</b> Win Tanpa Lose Agar Mendapatkan Win Rate <b>${wrReq}%</b>`;
        display(text);
    } else if (wrReq > 100 || tWr > 100) {
        text = `WR Tidak Boleh Lebih Dari 100%`;
        display(text);
    } else if (tWr > wrReq) {
        text = `Kamu Perlu <b>${loseNum}</b> Lose Tanpa Win Agar Mendapatkan Win Rate <b>${wrReq}%</b>`;
        display(text);
    } else if (tMatch == 0 && tWr == 0 && wrReq == 100) {
        text = `Kamu Perlu <b>1</b> Win Tanpa Lose Agar Mendapatkan Win Rate <b>${wrReq}%</b>`;
        display(text);
    } else if (wrReq == 100) {
        text = `Gabakalan Bisa Bro.`;
        display(text);
    } else if (resultNum >= 100000) {
        text = `<b>Emang Sanggup?!</b> <br> Kamu Perlu Lebih Dari <b>100.000</b> Win Tanpa Lose Agar Mendapatkan Win Rate <b>${wrReq}%</b>`;
        display(text);
    } else {
        text = `Kamu Perlu <b>${resultNum}</b> Win Tanpa Lose Agar Mendapatkan Win Rate <b>${wrReq}%</b>`;
        display(text);
    }
}

function display(text) {
    return resultText.innerHTML = text;
}

function rumus(tMatch, tWr, wrReq) {
    let tWin = tMatch * (tWr / 100);
    let tLose = tMatch - tWin;
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - tMatch;
    return Math.round(final);
}

function rumusLose(tMatch, tWr, wrReq) {
    let persen = tWr - wrReq;
    let final = tMatch * (persen / 100);
    return Math.round(final);
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