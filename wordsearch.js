const wordSearch = (letters, word) => {
    if (letters.length < 1) {
        return "Empty string given."
    }

    
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log("horizontalJoin", horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    const verticalJoin = []
    for (let i = 0; i < letters[0].length; i++) {
        let vertWord = "";
        for (let j = 0; j < letters.length; j++) {
            vertWord += letters[j][i];
        }
        verticalJoin.push(vertWord);   
    }
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;       

    // const diagonalJoin = [];
    // for (i = letters.length - 1; i >= 0; i--) {
    //     let diagonalWord = ""
    //     // for (j = 0; j < letters[i].length; j++) {
    //         // if (i !== letters.length && j !== 0 && j !== letters[i].length) {
               
    //         let count = 0;
    //         while (count < ) {
    //             diagonalWord += letters[i][j]
    //             count++;
    //         }


    //         // }
    //     // }
    //     diagonalJoin.push(diagonalWord)
    // }
    // console.log("DiagonalJoin:", diagonalJoin);
}

module.exports = wordSearch