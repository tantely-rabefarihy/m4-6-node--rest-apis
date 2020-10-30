const { words } = require('../data/words');

const getWord = (req,res) => {
    const wordId = req.params.id;
    const searchedWord = words.find(word => word.id === wordId) ;
 
    if (!wordId) {
        res.status(400).json({status: 400, message : "This word cannot be found!"})
    } else {
        res.status(200).json({status:200 , message : searchedWord })
    }

};


const getRandomWord = (req,res) => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (!randomWord) {
        res.status(400).json({status: 400, message : "This word cannot be found!"})
    } else {
        res.status(200).json({status:200 , message : randomWord })
    }

}


const findLetter = (req, res) => { 

    let guessedId = req.params.id;
    let guessedLetter = req.params.letter; 

    const wordToFind = words.find(word => word.id == guessedId)["word"];
 const guessing = wordToFind.split("").map(letter => letter.toLowerCase() === guessedLetter.toLowerCase()); 
    console.log("ANSWER: ", guessing);

res.status(200).json({status:200, data: guessing});


}



module.exports = { getWord, getRandomWord, findLetter }