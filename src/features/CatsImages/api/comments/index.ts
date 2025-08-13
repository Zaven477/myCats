export const fetchComments = async (count: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${count}&_limit=10`
  );
  return response.json();
};
