export type Users = {
  id: number;
  firstName: string;
  lastName: string;
};

export type FindMatchesProps = {
  user: Users;
  searchValue: string;
}
