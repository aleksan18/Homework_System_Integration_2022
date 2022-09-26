const express =require('express');
const app = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});

app.get('/timestamp', (req, res) => {
    return res.json({timestamp: new Date().toISOString(),format: 'ISO8601'});
})
app.get('/requestTimestamp', async (req, res) => {
    let returnStamp
    await fetch('http://127.0.0.1:8080/timestamp')
    .then((response) => response.json())
    .then(data =>{
        returnStamp=data
    } )
    .catch((err) => console.error(err))
   
    return res.json(returnStamp);
})
