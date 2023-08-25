function formatString(string) {
    if (string.length <= 40) {
        console.log(string);
    } else{
        console.log(string.slice(0, 40) + "...");
    }
}

formatString("djsdfjsdhvnsdjnvjsdhsdfjhjsdnsdnvbhjsdfgsdfhsjdnsvsdhbsjdhfdsn");