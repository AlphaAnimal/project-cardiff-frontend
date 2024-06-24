import {
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createScore } from "../services/scoreServices";
import { getWords, updateWord } from "../services/wordsServices";

//Fisher-Yates algorithm
export const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const Test: React.FC<{ theme: number; setTheme: any }> = (props) => {
  const { theme, setTheme } = props;

  useEffect(() => {
    const themeToSave = theme == 0 ? "light" : "dark";
    localStorage.setItem("theme", themeToSave);
  }, [theme]);

  const loggedUser = localStorage.getItem("user");
  const user = loggedUser ? JSON.parse(loggedUser) : "";
  const userId = user._id || "";

  useEffect(() => {
    try {
      const res = getWords();
      res.then((result) => {
        setResultObject(result);
        const words = result.map((word: any) => word.text);
        const shuffledWords = shuffleArray(words);
        setWords(shuffledWords);
        setWordsString(shuffledWords.join(" "));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [resultObject, setResultObject] = useState<any>();
  const [words, setWords] = useState<string[]>([""]);
  const [wordsString, setWordsString] = useState<string>(words.join(" "));
  const [selectedTime, setSelectedTime] = useState<number>(60);
  const [value, setValue] = useState<string>("");
  const [currentWords, setCurrentWords] = useState<string>(wordsString);
  const [currentDynamicWord, setCurrentDynamicWord] = useState<string>(
    currentWords.substring(0, currentWords.indexOf(" "))
  );
  const [currentWord, setCurrentWord] = useState<string>(
    currentWords.substring(0, currentWords.indexOf(" "))
  );
  const [reverseWord, setReverseWord] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(60);
  const [testRunning, setTestRunning] = useState<boolean>(false);
  const [keyboardType, setKeyboardType] = useState<string>("qwerty");

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  const handleTypeChange = (event: any) => {
    setKeyboardType(event.target.value);
  };

  const handleThemeChange = (event: any) => {
    setTheme(event.target.value);
  };

  useEffect(() => {
    if (testRunning)
      timer > 0 ? setTimeout(() => setTimer(timer - 1), 1000) : finishTest();
  }, [timer]);

  useEffect(() => {
    setCurrentWords(wordsString);
    setCurrentDynamicWord(wordsString.substring(0, wordsString.indexOf(" ")));
    setCurrentWord(wordsString.substring(0, wordsString.indexOf(" ")));
  }, [wordsString]);

  const startTest = () => {
    setScore(0);
    setTestRunning(true);
    document.getElementById("typing-box")?.focus();
    setTimeout(() => setTimer(selectedTime - 1), 1000);
  };

  const finishTest = () => {
    setTestRunning(false);
    const themeData = theme == 0 ? false : true;
    try {
      const data = {
        user: userId,
        type: keyboardType,
        score: score,
        theme: themeData,
      };
      console.log("data: ", data);
      const res = createScore(data);
      res.then((result) => {
        console.log("result: ", result);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const nextWord = () => {
    const trimmedWords = currentWords.trim();
    const nextWords = trimmedWords.slice(currentWords.indexOf(" "));
    setCurrentWords(nextWords.trim());
    const trimtrim = nextWords.trim();
    setCurrentDynamicWord(trimtrim.slice(0, trimtrim.indexOf(" ")));
    setCurrentWord(trimtrim.slice(0, trimtrim.indexOf(" ")));
    setReverseWord("");
  };

  const handleKeyDown = (e: any) => {
    if (testRunning)
      if (e.keyCode === 32) {
        if (value == currentWord) {
          setScore(score + 1);
        } else {
          const currentWordData = resultObject.filter(
            (word: any) => word.text == currentWord
          );
          const wordData = {
            text: currentWord,
            mistakes: currentWordData[0].mistakes + 1,
          };
          const wordId = currentWordData[0]._id;
          updateWord(wordId, wordData);
        }
        nextWord();
        setValue("");
      } else if (e.keyCode === 8) {
        if (reverseWord.length > 0) {
          const currentChar = reverseWord.length - 1;
          const currentWordArray = currentWord.split("");
          const letterToAdd = currentWordArray[currentChar];
          if (value.length <= currentWord.length) {
            setCurrentWords(letterToAdd + currentWords);
            setCurrentDynamicWord(letterToAdd + currentDynamicWord);
            setReverseWord(reverseWord.slice(0, -1));
            setValue(value.slice(0, -1));
          }
          setValue(value.slice(0, -1));
        } else if (reverseWord.length == 0) {
          setValue("");
        }
      } else if (e.keyCode !== 16) {
        setValue(value + e.key);
        if (currentDynamicWord.length > 0) {
          setCurrentDynamicWord(currentDynamicWord.slice(1));
          const letterGone = currentDynamicWord.slice(0, 1);
          setReverseWord(reverseWord + letterGone);
          setCurrentWords(currentWords.slice(1));
        }
      }
  };

  return (
    <Stack direction="column" spacing={10}>
      <Stack direction="row" spacing={4}>
        <Select
          value={selectedTime}
          onChange={handleTimeChange}
          style={{ width: "155px" }}
        >
          <MenuItem value={60}>One Minute</MenuItem>
          <MenuItem value={120}>Two Minutes</MenuItem>
          <MenuItem value={180}>Three Minutes</MenuItem>
        </Select>
        <Select
          value={keyboardType}
          onChange={handleTypeChange}
          style={{ width: "155px" }}
        >
          <MenuItem value={"qwerty"}>QWERTY</MenuItem>
          <MenuItem value={"dvorak"}>DVORAK</MenuItem>
          <MenuItem value={"colemark"}>COLEMARK</MenuItem>
        </Select>
        <Select
          value={theme}
          onChange={handleThemeChange}
          style={{ width: "155px" }}
        >
          <MenuItem value={0}>Light Theme</MenuItem>
          <MenuItem value={1}>Dark Theme</MenuItem>
        </Select>
        <Button
          variant="contained"
          onClick={(e) => (!testRunning ? startTest() : null)}
        >
          Start Test
        </Button>
      </Stack>
      <Stack
        direction="row"
        style={{ color: "text.primary", backgroundColor: "primary" }}
      >
        <TextField
          id="typing-box"
          autoComplete="off"
          variant="standard"
          dir="rtl"
          style={{ maxWidth: "200px" }}
          InputProps={{ style: { fontSize: 40 } }}
          onKeyDown={(e) => handleKeyDown(e)}
          value={value}
        />
        <TextField
          disabled={true}
          variant="standard"
          InputProps={{ style: { fontSize: 40 } }}
          value={currentWords}
        />
      </Stack>

      <Stack direction="row" spacing={10}>
        <Typography>{"Current score is: " + score}</Typography>
        {testRunning ? (
          <Typography>{"Time left: " + timer + " seconds"}</Typography>
        ) : (
          <Typography>{"Time left: " + selectedTime + " seconds"}</Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default Test;
