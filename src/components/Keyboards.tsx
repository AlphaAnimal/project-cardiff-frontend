import { Link, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Keyboards: React.FC<{}> = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const navigate = useNavigate();
  return (
    <Stack direction={"column"} spacing={2} mb={10} textAlign={"center"}>
      <Typography variant={"h4"}>Keyboard Layouts</Typography>
      <Stack textAlign={"left"} style={{ minWidth: "1000px" }} spacing={3}>
        <Link
          variant={"h5"}
          href="https://en.wikipedia.org/wiki/QWERTY#/media/File:KB_United_States.svg"
          target="_blank"
        >
          QWERTY
        </Link>
        <Link
          variant={"h5"}
          href="https://en.wikipedia.org/wiki/Dvorak_keyboard_layout#/media/File:KB_United_States_Dvorak.svg"
          target="_blank"
        >
          DVORAK
        </Link>
        <Link
          variant={"h5"}
          href="https://en.wikipedia.org/wiki/Colemak#/media/File:KB_US-Colemak.svg"
          target="_blank"
        >
          COLEMARK
        </Link>
        <Link
          variant={"h5"}
          href="https://www.technipages.com/how-to-toggle-between-two-keyboards"
          target="_blank"
        >
          How do I switch keyboards?
        </Link>
        <Typography variant={"h5"}>Custom Layouts coming soon!</Typography>
      </Stack>
    </Stack>
  );
};

export default Keyboards;
