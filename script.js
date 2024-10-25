function findNumber(num) {
    return num > 0 ? 1 : 0;
}

function findSum(katha, dhur, dhurki, furki, churki) {
    let totalSum = 0;
    if (katha > 0 && dhur > 0 && dhurki > 0 && furki > 0 && churki > 0) {
        totalSum = (((((katha * 20 + dhur) * 20 + dhurki) * 20 + furki) * 20) + churki);
    } else if (katha > 0 && dhur > 0 && dhurki > 0 && furki > 0) {
        totalSum = ((((katha * 20 + dhur) * 20 + dhurki) * 20) + furki);
    } else if (katha > 0 && dhur > 0 && dhurki > 0) {
        totalSum = (((katha * 20 + dhur) * 20) + dhurki);
    } else if (katha > 0 && dhur > 0) {
        totalSum = (katha * 20 + dhur);
    } else {
        totalSum = katha * 20;
    }
    return totalSum;
}

function actualValue(totalNo, findSum) {
    for (let i = 1; i < totalNo; i++) {
        findSum /= 20;
    }
    return findSum;
}

function findTotalDecimal(katha, dhur, dhurki, furki, churki, totalNo) {
    let findSumValue = findSum(katha, dhur, dhurki, furki, churki);
    let finalSum = actualValue(totalNo, findSumValue);
    return finalSum / 5.375;
}

function calculate() {
    const katha = parseFloat(document.getElementById("katha").value) || 0;
    const dhur = parseFloat(document.getElementById("dhur").value) || 0;
    const dhurki = parseFloat(document.getElementById("dhurki").value) || 0;
    const furki = parseFloat(document.getElementById("furki").value) || 0;
    const churki = parseFloat(document.getElementById("churki").value) || 0;

    const dhurNo = findNumber(dhur);
    const dhurkiNo = findNumber(dhurki);
    const furkiNo = findNumber(furki);
    const churkiNo = findNumber(churki);
    const totalNo = dhurNo + dhurkiNo + furkiNo + churkiNo;

    const totalSum = findSum(katha, dhur, dhurki, furki, churki);
    const totalDecimalValue = findTotalDecimal(katha, dhur, dhurki, furki, churki, totalNo);

    document.getElementById("result").innerHTML = `
        Total Number: ${totalSum} <br>
        Total Division by 20 = ${totalNo - 1} <br>
        Decimal Number is ====== ${totalDecimalValue.toFixed(4)}
    `;
}
