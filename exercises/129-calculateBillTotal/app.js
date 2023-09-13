function calculateBillTotal(preTaxAndTipAmount) {
    const salesTaxRate = 0.095;
    const tipRate = 0.15; 
    const salesTaxAmount = preTaxAndTipAmount * salesTaxRate;
    const tipAmount = preTaxAndTipAmount * tipRate;
  
    return preTaxAndTipAmount + salesTaxAmount + tipAmount;
  }
  
  let output = calculateBillTotal(20);
  console.log(output); // --> 24.9
  
