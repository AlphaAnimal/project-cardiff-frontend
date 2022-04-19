import { Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';


const Test: React.FC<{}> = () => {

  const words = ['some', 'random', 'words', 'which', 'the', 'user', 'has', 'to', 'type', 'but', 'they', 'should', 'come', 'from', 'api']
  const wordsString = words.join(' ')

  const [currentWords, setCurrentWords] = useState<string>(wordsString)
  const [currentWord, setCurrentWord] = useState<string>(currentWords.substring(0, currentWords.indexOf(' ')))
  const [currentLetter, setCurrentLetter] = useState<string>(currentWord.charAt(0))
  const [errorMade, setErrorMade] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)



  useEffect(() => {
    setCurrentLetter(currentWords.charAt(0))
  },[currentWords])

  useEffect(() => {
    console.log('Current word: ', currentWord)
  },[currentWord])
  useEffect(() => {
    console.log('Current words: ', currentWords)
  },[currentWords])

  const nextWord = () => {
    // problem is here
    // const newWords = removeFirstWord(wordsString);
    // setCurrentWords(newWords);
    const nextWords = currentWords.slice(1);
    setCurrentWords(nextWords);
    setCurrentWord(nextWords.substring(0, nextWords.indexOf(' ')));
  }

  const handleKeyDown = (e: any) => {
    //console.log('currentWords: ', currentWords)

    if (e.keyCode === 32){
      setCurrentWords(currentWords.slice(1));
      nextWord();
      console.log('value entered: spacebar');
    }
    else {
      if (currentWord.length > 0){
        console.log('value entered: ', e.key);
        setCurrentWord(currentWord.slice(1));
        setCurrentWords(currentWords.slice(1));
         e.key !== currentLetter ? setErrorMade(true) : setErrorMade(false)
      }
      else if (currentWord.length === 0){
        console.log('Word finished')
        if (errorMade === false){
          setScore(score + 1)
        }
      }   
    } 
  }

  return (
    <Stack direction="row" spacing="2">
      <TextField id="standard-basic" variant="standard" style={{maxWidth: '7px'}} onKeyDown={(e) => handleKeyDown(e)} />
      <TextField disabled={true} variant="standard" value={currentWords}/>
    </Stack>
  );
}

export default Test;