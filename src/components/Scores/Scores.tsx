import { Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getScores } from "../../state/scoreServices";
import { getWords } from "../../state/wordsServices";
import MistakesTable from "./components/MistakesTable";
import ScoreTable from "./components/ScoresTable";

const Scores: React.FC<{}> = () => {
  const [lightScores, setLightScores] = useState();
  const [darkScores, setDarkScores] = useState();
  const [words, setWords] = useState<string[]>([""]);

  useEffect(() => {
    try {
      const res = getScores();
      res.then((result) => {
        setLightScores(result.filter((score: any) => score.theme == false));
        setDarkScores(result.filter((score: any) => score.theme == true));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const res = getWords();
      res.then((result: any) => {
        const words = result.filter((word: any) => {
          if (word.mistakes !== 0) {
            return word;
          }
        });
        const sortedWords = words.sort(function (a: any, b: any) {
          var keyA = a.mistakes,
            keyB = b.mistakes;
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        const topTen = sortedWords.slice(-10);
        setWords(topTen);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <Stack textAlign={"center"} direction="column" spacing={3}>
      <Typography variant={"h3"}>Global Scores</Typography>
      <Typography variant={"h6"}>
        For personal scores check your{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
        >
          Profile
        </span>
      </Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Stack direction="column" textAlign={"center"} spacing={2}>
          <Typography variant={"h5"}>Light Theme</Typography>
          <ScoreTable data={lightScores}></ScoreTable>
        </Stack>
        <Stack direction="column" textAlign={"center"} spacing={2}>
          <Typography variant={"h5"}>Dark Theme</Typography>
          <ScoreTable data={darkScores}></ScoreTable>
        </Stack>
      </Stack>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant={"h5"}>Most Difficult Words</Typography>
        <Stack>
          <MistakesTable data={words}></MistakesTable>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Scores;
