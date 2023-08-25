function logItems(array) {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`${i+1} - ${array[i]}`);        
    }
}

logItems([1, 2, 9, 4]);