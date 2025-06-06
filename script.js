function repeatText() {
    const text = document.getElementById("textInput").value;
    const count = parseInt(document.getElementById("repeatCount").value);
    const resultDiv = document.getElementById("result");

    if (!text) {
        resultDiv.innerHTML = "Please enter some text.";
        resultDiv.style.color = "#800000";
        return;
    }

    if (isNaN(count) || count < 1) {
        resultDiv.innerHTML = "Please enter a valid positive number.";
        resultDiv.style.color = "#800000";
        return;
    }

    let repeated = "";
    for (let i = 0; i < count; i++) {
        repeated += text + "<br>";
    }

    resultDiv.innerHTML = repeated;
    resultDiv.style.color = "#004080";
}
