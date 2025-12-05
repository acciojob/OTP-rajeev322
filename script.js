//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

window.onload = () => {
    document.getElementById("code-1").focus();
};

inputs.forEach((input, index) => {

    input.addEventListener("input", () => {
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "" && index > 0) {
                inputs[index - 1].value = "";
                inputs[index - 1].focus();
            }
        }
    });

});
