function sidebar() {
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function sakrij() {
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    const prozor = document.getElementById("prompt");
    const submitBtn = document.getElementById("ok");
    const output = document.getElementById("output");
    const ime = document.getElementById("ime");

    submitBtn.addEventListener("click", function() {
        const name = ime.value.trim();
        const spolInput = document.querySelector('input[name="spol"]:checked');
        let spol = "musko";
            if (spolInput) {
                spol = spolInput.value;
                }
        let pozdrav = "Dobrodošao";
            if (spol === "zensko") {
                pozdrav = "Dobrodošla";
                }
            if (name) {
                output.textContent = pozdrav + ", " + name + "!";
                } else {
                    output.textContent = "Dobro došao/la!";
                }
                prozor.style.display = "none";
                document.querySelector(".hero-text h1").classList.add("crta");
    });
});