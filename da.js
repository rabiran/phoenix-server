const axios = require('axios');

async function kaki(){
    let da = await axios.get('https://www.google.com/');
    console.log("Log: : kaki -> da", da.status)
}

kaki();