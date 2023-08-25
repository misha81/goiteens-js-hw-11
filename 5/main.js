function checkForSpam(message) {
    const banwords = ['sale', 'spam'];

    const lowercase = message.toLowerCase();

    for (const word of banwords) {
        // if (lowercase.includes(word)) {
        //     console.log(true);
        // } else{
        //     console.log(false)
        // }

        console.log(lowercase.includes(word));
    }
}

checkForSpam("SALE! it is not a spAm message!");