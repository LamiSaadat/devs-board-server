const knex = require("knex")(require("../knexfile").development);
const jwt = require("jsonwebtoken");

//signup (add user)
exports.signup = (req, res) => {
  console.log(req.body);
  knex("user")
    .insert(req.body)
    .then((data) => {
      console.log(data);
      res.status(201).json({ success: "true" });
    })
    .catch((err) => {
      res.status(400).send(`Error creating user: ${err}`);
    });
};

//login (also get user)
// exports.login = (req, res) => {
//   knex("user")
//     .where({ id: req.params.id })
//     .then((data) => {
//       console.log(data);
//   const { username, password } = req.body;
//   if (data.length && username && password) {
//     const token = jwt.sign(
//       {
//         name: user.name,
//         username,
//       },
//       process.env.JWT_SECRET
//     );
//     return res.status(200).json({ token });
//   } else {
//     return res.status(403).json({
//       success: false,
//       message: "Username/password combination is wrong",
//     });
//   }
// });
//     });
// };

//user boards gallery
//single board
