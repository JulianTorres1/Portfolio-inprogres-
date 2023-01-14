import React, { useState, useEffect } from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react';

const Card = ({ repo }) => (
  <Box p={5} shadow="md" borderWidth="1px">
    <Link href={repo.html_url} isExternal>
      <Text fontWeight="bold">{repo.name}</Text>
    </Link>
    <Text color="gray.500">{repo.description}</Text>
    <Text color="gray.500">{repo.language}</Text>
  </Box>
);

const RepoCard = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=10`);
      const data = await res.json();
      setRepos(data);
    }
    fetchData();
  }, [username]);

  return (
    <Box>
      {repos.map((repo) => (
        <Card key={repo.id} repo={repo} />
      ))}
    </Box>
  );
};

export default RepoCard;