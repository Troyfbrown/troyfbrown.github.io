function calculateService() {
    let serv1 = document.getElementById("serv1");
    let serv2 = document.getElementById("serv2");
    let serv3 = document.getElementById("serv3");
    let serv4 = document.getElementById("serv4");
    let serv5 = document.getElementById("serv5");
    let serv6 = document.getElementById("serv6");

    let totalServices = 0;
    let totalCost = 0;

    if (serv1.checked) {
        totalServices++;
        totalCost += 100
    }

    if (serv2.checked) {
        totalServices++;
        totalCost += 1300;
    }

    if (serv3.checked) {
        totalServices++;
        totalCost += 2000
    }

    if (serv4.checked) {
        totalServices++;
        totalCost += 2500;
    }

    if (serv5.checked) {
        totalServices++;
        totalCost += 20
    }

    if (serv6.checked) {
        totalServices++;
        totalCost += 35;
    }

    let serviceDisplay = document.getElementById("services-display");
    serviceDisplay.innerHTML = `You Have selected ${totalServices} of Aubrie Lynn's services. This will cost a total of $${totalCost}`;
}