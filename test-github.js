const https = require('https');
require('dotenv').config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

console.log("Token exists:", !!GITHUB_TOKEN);
console.log("Username:", GITHUB_USERNAME);

var data = JSON.stringify({
  query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
});

const options = {
  hostname: 'api.github.com',
  path: '/graphql',
  port: 443,
  method: 'POST',
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    'User-Agent': 'Node'
  }
};

const req = https.request(options, res => {
  let response = '';
  res.on('data', d => response += d);
  res.on('end', () => {
    console.log(JSON.stringify(JSON.parse(response), null, 2));
  });
});

req.on('error', error => {
  console.error('Error:', error);
});

req.write(data);
req.end();
