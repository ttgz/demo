document.addEventListener("DOMContentLoaded", () => {
    const minusButtons = document.querySelectorAll(".minus");
    const plusButtons = document.querySelectorAll(".plus");
    const deleteButtons = document.querySelectorAll(".delete");
    const inputFields = document.querySelectorAll("input[type='number']");

    function updateCart() {
        const rows = document.querySelectorAll("tbody tr");
        let total = 0;

        rows.forEach(row => {
            const price = parseInt(row.cells[3].textContent.replace(/\./g, "").replace("đ", ""), 10);
            const quantity = parseInt(row.cells[4].querySelector("input").value, 10);
            const subtotal = price * quantity;
            row.cells[5].textContent = `${subtotal.toLocaleString()}đ`;
            total += subtotal;
        });

        document.querySelector(".summary span").textContent = `${total.toLocaleString()}đ`;
    }

    minusButtons.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            const input = inputFields[idx];
            if (input.value > 1) {
                input.value--;
                updateCart();
            }
        });
    });

    plusButtons.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            const input = inputFields[idx];
            input.value++;
            updateCart();
        });
    });

    deleteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest("tr").remove();
            updateCart();
        });
    });

    updateCart();
});
