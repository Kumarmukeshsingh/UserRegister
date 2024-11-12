const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA (1).json");
const cors = require("cors");


const app = express();
const port = 4000;

app.use(cors());
// middlewere
app.use(express.urlencoded({ extended: false }))

// router
app.get('/users', (req, res) => {
   return res.json(users);
})

app.get("/users/:id", (req, res) => {
   const id = Number(req.params.id);
   const user = users.find((use) => use.id === id);
   return res.json(user);
})


// create userS
app.post("/users", (req, res) => {
   const body = req.body;
   console.log(body);

   users.push({ ...body, id: users.length + 1 });
   fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", id: users.length });

   });
})

// delete the user
app.delete("users/:id", () => {
   const id = Number(req.params.id);
   const deleteUser = users.find((Duser) => Duser.id === id)
   const index = users.indexOf(deleteUser);
   users.splice(index, 1)
   fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", id: users.length - 1, data: { user: deleteUser } });
   });

   return res.json()
})
// update the user
app.patch("users/:id", (req, res) => {
   const id = Number(req.params.id);
   // let id = req.params.id * 1;// covert string into Number
   let userUpdate = users.find(use => use.id === id);
   if (!userUpdate) {
      return res.status(404).json({
         status: "faild",
         message: " no user with " + id + " is found"
      })
   }
   let index = users.indexOf(userUpdate); /// id-4 index-3

   Object.assign(userUpdate, req.body);
   users[index] = userUpdate;
   users[index] = userUpdate;
   fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "success", data: { user: userUpdate } });
   });
   return res.json()
})



app.listen(port, () => {
   console.log(`server running on prot ${port}`);

})