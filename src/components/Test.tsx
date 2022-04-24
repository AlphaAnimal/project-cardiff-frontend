import { Button, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';


const Test: React.FC<{time: number}> = (props) => {

  const words = ['some', 'random', 'words', 'which', 'the', 'user', 'has', 'to', 'type', 'but', 'they', 'should', 'come', 'from', 'api']
  const wordsString = words.join(' ')

  const [value, setValue] = useState<string>('')
  const [currentWords, setCurrentWords] = useState<string>(wordsString)
  const [currentDynamicWord, setCurrentDynamicWord] = useState<string>(currentWords.substring(0, currentWords.indexOf(' ')))
  const [currentWord, setCurrentWord] = useState<string>(currentWords.substring(0, currentWords.indexOf(' ')))
  const [reverseWord, setReverseWord] = useState<string>('')
  const [score, setScore] = useState<number>(0)
  const [timer, setTimer] = useState<number>(0)
  const [testRunning, setTestRunning] = useState<boolean>(false)

  useEffect(() => {
    timer > 0 ? setTimeout(() => setTimer(timer -1), 1000) : finishTest()
  },[timer]);

  const startTest = () => {
    setTestRunning(true)
    document.getElementById('typing-box')?.focus()
    setTimeout(() => setTimer(props.time -1), 1000);
  }

  const finishTest = () => {
    setTestRunning(false)
  }

  const nextWord = () => {
    const trimmedWords = currentWords.trim();   
    const nextWords = trimmedWords.slice(currentWords.indexOf(' '));
    setCurrentWords(nextWords.trim());
    const trimtrim = nextWords.trim()
    setCurrentDynamicWord(trimtrim.slice(0, trimtrim.indexOf(' ')));
    setCurrentWord(trimtrim.slice(0, trimtrim.indexOf(' ')));
    setReverseWord('');
  }

  const handleKeyDown = (e: any) => {
    if (testRunning)
    if (e.keyCode === 32){
      // Check value vs currentword
      if (value  == currentWord){
        setScore(score+1)
      }
      nextWord();
      setValue('')
      console.log('value entered: spacebar');
    }
    else if (e.keyCode === 8){
      console.log('value entered: backspace');
      if (reverseWord.length > 0){
        setValue(value.slice(0, -1))
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
      setValue(value + e.key)
      if (currentDynamicWord.length > 0){
        console.log('value entered: ', e.key);
        setCurrentDynamicWord(currentDynamicWord.slice(1));
        const letterGone = currentDynamicWord.slice(0, 1);
        setReverseWord(reverseWord+letterGone)
        setCurrentWords(currentWords.slice(1));
      }
      else if (currentDynamicWord.length === 0){
        console.log('Word finished')
      }   
    } 
  }

  return (
    <Stack>
      <Stack direction="row" spacing="2">
        <TextField id="typing-box" variant="standard" style={{maxWidth: '7px'}} onKeyDown={(e) => handleKeyDown(e)} value={value} />
        <TextField disabled={true} variant="standard" value={currentWords}/>
        <Button variant="contained" onClick={(e) => startTest()} >Start Test</Button>
      </Stack>
      <span>{'Current score is: '+score}</span>
      <span>{'Time left: '+timer}</span>
    </Stack>
  );
}

export default Test;