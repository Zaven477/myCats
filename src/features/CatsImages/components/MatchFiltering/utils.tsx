export const findMatches = (text: string, searchStr: string) => {
  const regex = new RegExp(`(${searchStr})`, "gi");
  const matches = text.split(regex);

  return matches.map((part, index) =>
    part.toLowerCase() === searchStr.toLowerCase() ? (
      <mark key={index} style={{ background: "#3CB371" }}>
        {part}
      </mark>
    ) : (
      part
    )
  );
};
