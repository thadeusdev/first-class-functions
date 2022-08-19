let books = [
    {
      title: 'Eloquent JavaScript',
      price: 16.00,
      inventory: 5
    },
    {
      title: 'JavaScript: TheGood parts',
      price: 10.50,
      inventory: 10
    },
    {
      title: 'Learn JavaScript VISUALLY',
      price: 25.00,
      inventory: 2
    },
    {
      title: 'You don\'t know js',
      price: 60.00,
      inventory: 8
    },
    {
      title: 'JavaScript: The Definitive Guide',
      price: 18.95,
      inventory: 0
    }
  ]
  
  function printReport(foo){
    console.log(foo(books))
  }
  
  function totalInventory(array){
    let total = 0;
    for (let item of array){
      total += item.inventory;
    }
    return `Total Inventory: ${total} items`;
  }
  
  function replenish(array){
    let replenishList = []
    for (let item of array){
      if (item.inventory < 3){
        replenishList.push(item.title)
      }
    }
    return `place order for: ${replenishList.join(', ')}`
  }
  
  printReport(totalInventory)
  printReport(replenish)
  