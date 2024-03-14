import cors from "cors"
import dotenv from "dotenv"
import express from "express"
dotenv.config({ path: "./env" })
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
const PORT = process.env.PORT ?? 3003
app.listen(PORT, () => {
  console.log("listen :", PORT)
});


