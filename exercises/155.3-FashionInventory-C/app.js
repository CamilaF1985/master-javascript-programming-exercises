function renderInventory(shoeList) {
  const result = [];

  for (const designer of shoeList) {
    const designerName = designer.name;
    const shoes = designer.shoes;

    for (const shoe of shoes) {
      const shoeName = shoe.name;
      const price = shoe.price;

      if (shoeName.includes('black')) {
        result.push([designerName, shoeName, price]);
      }
    }
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

console.log(renderInventory(currentInventory));

