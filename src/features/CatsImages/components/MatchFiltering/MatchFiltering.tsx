import { useEffect, useState } from "react";
import { getData } from "../../api/getData";
import type { Users } from "./types";
import "./styles.css";
import { ClipLoader } from "react-spinners";
import { FindMatches } from "./FindMatches";

export const UsersFiltering = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [allUsers, setAllUsers] = useState<Users[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchMatch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setSearchValue(value);

    const filtered = allUsers.filter((user) => {
      const normalizedFirstName = user.firstName.toLowerCase();
      const normalizedLastName = user.lastName.toLowerCase();

      const currentUser = `${normalizedFirstName} ${normalizedLastName}`;

      return currentUser.includes(value.toLowerCase());
    });
    if (filtered.length === 0) {
      setMessage("Ничего не найдено");
    } else {
      setMessage(null);
      setUsers(filtered);
    }
  };

  const getUsers = async () => {
    setLoading(true);

    const response = await getData();
    setUsers(response);
    setAllUsers(response);

    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="containerFormSearch">
        <form className="formCont">
          <input className="inputFormSearch" onChange={searchMatch} />
        </form>
      </div>
      {loading && (
        <div className="loaderUsers">
          <ClipLoader
            color="rgba(33, 150, 243, 1)"
            cssOverride={{ borderWidth: "2px" }}
          />
        </div>
      )}
      {message ? (
        <div className="matchesMessage">
          <p className="searchMessage">{message}</p>
        </div>
      ) : (
        <ul className="listUsers">
          {users.map((user) => (
            <li key={user.id}>
              <FindMatches user={user} searchValue={searchValue} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
