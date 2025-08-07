
const pageKey = location.pathname;

window.onload = function () {
    const savedTitle = localStorage.getItem(pageKey + "_title");
    const savedNumber = localStorage.getItem(pageKey + "_number");
    const savedBody = localStorage.getItem(pageKey + "_body");
    if (savedTitle) document.getElementById("doc-title").innerText = savedTitle;
    if (savedNumber) document.getElementById("doc-number").innerText = savedNumber;
    if (savedBody) document.getElementById("doc-body").innerHTML = savedBody;
};

function autoSave() {
    localStorage.setItem(pageKey + "_title", document.getElementById("doc-title").innerText);
    localStorage.setItem(pageKey + "_number", document.getElementById("doc-number").innerText);
    localStorage.setItem(pageKey + "_body", document.getElementById("doc-body").innerHTML);
}

function downloadPDF() {
    const title = document.getElementById("doc-title").innerText;
    const number = document.getElementById("doc-number").innerText;
    const body = document.getElementById("doc-body").innerText;

    const win = window.open('', '', 'height=800,width=800');
    win.document.write('<html><head><title>' + title + '</title></head><body>');
    win.document.write('<h1 style="color:red;text-align:left;font-family:SimSun;">' + title + '</h1>');
    win.document.write('<div style="font-family:SimSun;font-size:14px;">' + number + '</div>');
    win.document.write('<div style="font-family:SimSun;font-size:16px;line-height:1.8;">' + body.replace(/\n/g, "<br>") + '</div>');
    win.document.write('</body></html>');
    win.document.close();
    win.print();
}
