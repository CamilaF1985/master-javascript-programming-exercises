function renderAverageCostPerDesigner(inventory) {
  const result = [];

  for (const designer of inventory) {
    const designerName = designer.name;
    const shoes = designer.shoes;
    
    let totalCost = 0;
    let shoeCount = 0;

    for (const shoe of shoes) {
      const price = shoe.price;
      totalCost += price;
      shoeCount++;
    }

    const averagePrice = Math.round(totalCost / shoeCount);
    
    result.push({ name: designerName, averagePrice });
  }

  return result;
}

let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

console.log(renderAverageCostPerDesigner(currentInventory));

