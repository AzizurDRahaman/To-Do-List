import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const entry=[];
const work=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs",{entry : entry});
});

app.post("/", (req, res) => {
    const task = req.body.entry;
    entry.push(task);
    res.render("index.ejs",{entry : entry});
});


app.post("/delete", (req, res) => {
  const index = req.body.deleteButton;
  const indexToDelete = parseInt(index);
  entry.splice(indexToDelete, 1);
  res.redirect("/");
});

app.get("/work", (req,res) =>{
  return res.render("work.ejs",{work : work});
})

app.post("/work", (req, res) => {
    const task = req.body.entry;
    work.push(task);
    res.render("work.ejs",{work : work});
});

app.post("/delete/work", (req, res) => {
  const index = req.body.deleteButton;
  const indexToDelete = parseInt(index);
  work.splice(indexToDelete, 1);
  res.redirect("/work");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
  