import { Stack } from "@mui/material";
import React from "react";

const Timer: React.FC<{ time: number }> = (props) => {
  const { time } = props;

  return (
    <>
      <Stack fontSize={75}>{time}</Stack>
    </>
  );
};

export default Timer;
