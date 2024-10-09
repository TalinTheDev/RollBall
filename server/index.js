const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use(express.static(path.join(__dirname, '../game'),{
    setHeaders: function (res,path){
        if(path.endsWith(".gz")){
            res.set("Content-Encoding", "gzip")
        }
        if(path.includes("wasm")){
            res.set("Content-Type", "application/wasm")
        }
    }
}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})