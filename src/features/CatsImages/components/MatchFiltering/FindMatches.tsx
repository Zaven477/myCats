import type { FindMatchesProps } from "./types";

export const FindMatches = ({ user, searchValue }: FindMatchesProps) => {
  const text = `${user.firstName} ${user.lastName}`;
  const regex = new RegExp(`(${searchValue})`, "gi");
  const matches = text.split(regex);

  return matches.map((part, index) =>
    part.toLowerCase() === searchValue.toLowerCase() ? (
      <mark key={index} style={{ background: "#3CB371" }}>
        {part}
      </mark>
    ) : (
      part
    )
  );
};
