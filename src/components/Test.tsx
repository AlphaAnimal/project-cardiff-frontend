import { Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';


const Test: React.FC<{}> = () => {

  const words = ['some', 'random', 'words', 'which', 'the', 'user', 'has', 'to', 'type', 'but', 'they', 'should', 'come', 'from', 'api']
  const wordsString = words.join(' ')

  const [value, setValue] = useState<string>('')
  const [currentWords, setCurrentWords] = useState<string>(wordsString)
  const [currentDynamicWord, setCurrentDynamicWord] = useState<string>(currentWords.substring(0, currentWords.indexOf(' ')))
  const [currentWord, setCurrentWord] = useState<string>(currentWords.substring(0, currentWords.indexOf(' ')))
  const [reverseWord, setReverseWord] = useState<string>('')
  const [currentLetter, setCurrentLetter] = useState<string>(currentDynamicWord.charAt(0))
  const [errorMade, setErrorMade] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    setCurrentLetter(currentWords.charAt(0))
  },[currentWords])

  useEffect(() => {
    console.log('Current word: ', currentDynamicWord)
  },[currentDynamicWord])
  useEffect(() => {
    console.log('Reverse word: ', reverseWord)
  },[reverseWord])
  useEffect(() => {
    console.log('Current words: ', currentWords)
  },[currentWords])


  const nextWord = () => {
    const trimmedWords = currentWords.trim()   
    const nextWords = trimmedWords.slice(currentWords.indexOf(' '));
    setCurrentWords(nextWords.trim());
    const trimtrim = nextWords.trim()
    setCurrentDynamicWord(trimtrim.slice(0, trimtrim.indexOf(' ')));
    setCurrentWord(trimtrim.slice(0, trimtrim.indexOf(' ')));
    setReverseWord('');
  }

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 32){
      nextWord();
      setValue('')
      console.log('value entered: spacebar');
    }
    else if (e.keyCode === 8){
      console.log('value entered: backspace');
      if (reverseWord.length > 0){
        const currentChar = reverseWord.length -1;
        const currentWordArray = currentWord.split('');
        const letterToAdd = currentWordArray[currentChar]
        setCurrentWords(letterToAdd + currentWords)
        setCurrentDynamicWord(letterToAdd + currentDynamicWord)
        setReverseWord(reverseWord.slice(0, -1))
      }
      else if (reverseWord.length == 0){
        console.log('No chars to delete')
      }
    }
    else {
      setValue(e.value)
      if (currentDynamicWord.length > 0){
        console.log('value entered: ', e.key);
        setCurrentDynamicWord(currentDynamicWord.slice(1));
        const letterGone = currentDynamicWord.slice(0, 1);
        setReverseWord(reverseWord+letterGone)
        setCurrentWords(currentWords.slice(1));
         e.key !== currentLetter ? setErrorMade(true) : setErrorMade(false)
      }
      else if (currentDynamicWord.length === 0){
        console.log('Word finished')
        if (errorMade === false){
          setScore(score + 1)
        }
      }   
    } 
  }

  return (
    <Stack direction="row" spacing="2">
      <TextField id="standard-basic" variant="standard" style={{maxWidth: '7px'}} onKeyDown={(e) => handleKeyDown(e)} value={value} />
      <TextField disabled={true} variant="standard" value={currentWords}/>
    </Stack>
  );
}

export default Test;