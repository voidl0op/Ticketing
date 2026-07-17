const btn = document.getElementById("btn");
const originalBtnText = btn.textContent;

btn.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "User" && password === "123") {
        window.location.href = "https://voidl0op.github.io/Ticketing/Ticket/ticket.html";
    } else {
        btn.classList.add("btn-error");
        btn.textContent = "Informations incorrectes";
    }
});

["email", "password"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
        btn.classList.remove("btn-error");
        btn.textContent = originalBtnText;
    });
});