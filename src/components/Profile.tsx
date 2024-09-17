import { Button, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getScores } from "../state/scoreServices";
import { logout } from "../state/userServices";
import ScoreTable from "./Scores/components/ScoresTable";

const Profile: React.FC<{}> = () => {
  const _user = localStorage.getItem("user");
  useEffect(() => {
    try {
      const res = getScores();
      res.then((result) => {
        const myScores = result.filter((score: any) => score.user == user._id);
        const lightScores = myScores.filter(
          (score: any) => score.theme == false
        );
        const darkScores = myScores.filter((score: any) => score.theme == true);
        setLightScores(lightScores);
        setDarkScores(darkScores);
        setPreferredThemeTests(
          lightScores.length > darkScores.length
            ? lightScores.length
            : darkScores.length
        );
        setPreferredTheme(
          lightScores.length > darkScores.length ? "Light" : "Dark"
        );
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [lightScores, setLightScores] = useState();
  const [darkScores, setDarkScores] = useState();
  const [preferredTheme, setPreferredTheme] = useState("");
  const [preferredThemeTests, setPreferredThemeTests] = useState(0);

  const navigate = useNavigate();

  if (!_user) return <></>;
  const user = JSON.parse(_user);



  const onLogout = () => {
    const res = logout();
    navigate("/login");
  };

  return (
    <>
      <Stack direction={"column"} spacing={2} mb={10}>
        <Typography variant={"h6"}>Logged in as: {user.name}</Typography>
        <Typography variant={"h6"}>Email: {user.email}</Typography>
        <Typography variant={"h6"}>
          Preferred Theme: {preferredTheme} with {preferredThemeTests} tests
          performed
        </Typography>
        <Stack>
          <Button
            style={{ width: "120px" }}
            onClick={(e) => onLogout()}
            variant="contained"
          >
            Logout
          </Button>
        </Stack>
      </Stack>
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
    </>
  );
};

export default Profile;
