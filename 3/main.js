function findLongestWord(string) {
    const words = string.split(' ');
    let LongestWord = '';

    for (const word of words) {
        if (word.length > LongestWord.length) {
            LongestWord = word;
        }
    }

    console.log(LongestWord)
}

findLongestWord("This is sentance with absolutely big words");