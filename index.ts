console.log("Hello via Bun!");
import express from "express"

const app = express()
const obj = {
  name: "Jhon",
  lastname: "doe",
  age: 24

}

app.get("/", (req, res) => {
  res.status(200).json({ data: obj })
})
app.listen("3000", () => {
  console.log("listen 3001")
});

