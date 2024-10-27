function calculateDecimal() {
    // Get input values
    const katha = parseFloat(document.getElementById('katha').value) || 0;
    const dhur = parseFloat(document.getElementById('dhur').value) || 0;
    const dhurki = parseFloat(document.getElementById('dhurki').value) || 0;
    const furki = parseFloat(document.getElementById('furki').value) || 0;
    const churki = parseFloat(document.getElementById('churki').value) || 0;

    // Conversion ratios
    const kathaToDhur = 20;
    const dhurToDhurki = 20;
    const dhurkiToFurki = 20;
    const furkiToChurki = 20;
    const dhurToDecimalFactor = 5.375;

    // Convert all units to Dhur
    const totalDhurFromKatha = katha * kathaToDhur;
    const totalDhurFromDhur = dhur;
    const totalDhurFromDhurki = dhurki / dhurToDhurki;
    const totalDhurFromFurki = furki / (dhurToDhurki * dhurkiToFurki);
    const totalDhurFromChurki = churki / (dhurToDhurki * dhurkiToFurki * furkiToChurki);

    // Sum all Dhur values
    const totalDhur = totalDhurFromKatha + totalDhurFromDhur + totalDhurFromDhurki + totalDhurFromFurki + totalDhurFromChurki;

    // Convert Dhur to Decimal
    const decimalValue = totalDhur / dhurToDecimalFactor;

    // Display the results
    document.getElementById('totalDhurOutput').innerText = `Total Dhur = ${totalDhur.toFixed(6)}`;
    document.getElementById('decimalOutput').innerText = `Total Decimal = ${decimalValue.toFixed(6)}`;
}
