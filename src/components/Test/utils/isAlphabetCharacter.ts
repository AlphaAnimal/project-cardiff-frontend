export const isAlphabetCharacter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    return (
      e.key.length === 1 &&
      ((e.key >= "a" && e.key <= "z") ||
        (e.key >= "A" && e.key <= "Z") ||
        e.key === "-")
    );
  };
  