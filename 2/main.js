function calculateEngravingPrice(message, pricePerWord) {
    console.log(`Вартість гравіювання: ${(message.split(' ').length) * pricePerWord}`);
}

calculateEngravingPrice("Hello, my name is Misha", 50);