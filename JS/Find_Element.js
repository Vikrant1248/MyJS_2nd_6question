function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

let items = [254, 45, 212, 365, 2543];
console.log(random_item(items));