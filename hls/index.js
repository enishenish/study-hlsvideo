//ip
const os = require('os')

const ips = os.networkInterfaces()
Object.keys(ips).map((key, index) => {
  const interfaceIp = ips[key]
  interfaceIp.map((val, index) => {
    console.log(`${key}-${index}: ${val.address}`);
  })
})

//express
const express = require('express')
const app = express()
const port = 4321
const cors = require('cors')

app.use(cors({credentials: false}))
app.use(express.static('public'))

app.listen(port, () => console.log(`Listen port at ${port}`))