
function downloadFile(filename) {
    const content = document.getElementById('content').value;
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}
