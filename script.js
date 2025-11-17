document.getElementById("calculate").addEventListener("click", function () {
    const plan = document.getElementById("plan").value;
    const age = document.getElementById("age").value.trim();
    const dependents = document.getElementById("dependents").value.trim();
    const province = document.getElementById("province").value;

    if (!plan || !age || !dependents || !province) {
        alert("Please fill in all fields before getting a quote.");
        return;
    }

    const ageNum = parseInt(age);
    const dependentsNum = parseInt(dependents);

    if (isNaN(ageNum) || ageNum < 0 || isNaN(dependentsNum) || dependentsNum < 0) {
        alert("Please enter valid, non-negative values for age and dependents.");
        return;
    }

    const basePrice = plan === "basic" ? 500 : 1000;
    const ageFactor = plan === "basic" ? 4 : 6;
    const dependentCost = dependentsNum * 100;
    const total = basePrice + (ageFactor * ageNum) + dependentCost;

    document.getElementById("result").innerText = `Estimated Premium: R${total.toLocaleString()}`;
});

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
