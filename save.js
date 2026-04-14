const fs = require('fs');
const payload = JSON.parse(process.env.GITHUB_EVENT_PAYLOAD || '{}');
if(!payload.client_payload) process.exit(0);
const { key, list } = payload.client_payload;
const data = JSON.parse(fs.readFileSync('data/data.json','utf8'));
data[key] = list;
fs.writeFileSync('data/data.json', JSON.stringify(data, null, 2));
