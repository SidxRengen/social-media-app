const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("contact", "enter a valid contact").isMobilePhone(),
    body("age", "enter a valid age").isInt(),
  ],
  async (req, res) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      return User.create({
        name: req.body.name,
        contact: req.body.contact,
        age: req.body.age,
      })
        .then((user) => res.json(user))
        .catch((error) => res.json(error));
    }
    res.send({ errors: result.array() });
  }
);
router.get("/getuser", async (req, res) => {
  const users = await User.find({ user: req.user });
  res.json(users);
});
router.put("/updateuser/:id", async (req, res) => {
    const {name,age, contact}= req.body;
    const newuser = {} 
    if (name) {newuser.name = name;}
    if (age) {newuser.age = age;}
    if (contact) {newuser.contact = contact;}
    // update with id
    const updateuser = await User.findById(req.params.id)
    if (!updateuser) {
        return res.json({"errors":"user not found"}).status(404);
    }
    else{
        updatednote = await User.findByIdAndUpdate(req.params.id,{$set:newuser},{new:true})      
    }
})
router.delete("/deleteuser/:id", async (req, res) => {
    // delete with id
    const deleteuser = await User.findById(req.params.id)
    if (!deleteuser) {
        return res.json({"errors":"user not found"}).status(404);
    }
    else{
        deletednote = await User.findByIdAndDelete(req.params.id)
        res.json(deletednote)
    }
})

module.exports = router;
