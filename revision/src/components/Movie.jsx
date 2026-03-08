import { List } from "@chakra-ui/react";

function Movie({ movie }) {
  return (
    <List.Root>
      <List.Item>{movie.name}</List.Item>
      <List.Item>{movie.authors.join(", ")}</List.Item>
    </List.Root>
  );
}

export default Movie;
