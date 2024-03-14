import cors from "cors"
import "dotenv/config"
import express from "express"

const app = express()
app.use(cors())

const pass = "tespass"
const obj = {
  name: "Jhon",
  lastname: "doe",
  age: 24

}

app.get("/", (req, res) => {
  res.status(200).json({ data: obj })
})
const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log("listen 3001")
});


