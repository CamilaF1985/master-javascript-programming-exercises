function getLaceNameDataForShoes(inventory) {
  const result = [];

  for (const designer of inventory) {
    const designerName = designer.name;
    const shoes = designer.shoes;

    for (const shoe of shoes) {
      const shoeName = shoe.name;
      const words = shoeName.split(' ');

      for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();
        if (word.includes('lace') || word.includes('laced')) {
          result.push({
            nameWords: words,
            targetWordIndex: i,
          });
          break;
        }
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

console.log(getLaceNameDataForShoes(currentInventory));
