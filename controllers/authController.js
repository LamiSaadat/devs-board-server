const knex = require("knex")(require("../knexfile").development);
const jwt = require("jsonwebtoken");

//auth token middleware
exports.authorize = (req, res, next) => {
  //if no auhtorization header is povided, respond with error
  if (!req.headers.authorization)
    return res.status(401).json({
      success: false,
      message: "This route requires authorization header.",
    });

  //remove "Bearer" from auth token
  const authToken = req.headers.authorization.split(" ")[1];

  //verify the JWT token
  jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
    //if token has been tampered with or has expired, respond with an error
    if (err)
      return res
        .status(401)
        .json({ success: false, message: "The token is invalid" });

    //if token is verified, decode for endpoint to use
    req.jwtDecoded = decoded;
    next();
  });
};

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

//login (get user)
exports.login = (req, res) => {
  const { username, password } = req.body;

  knex("user")
    .where({ username: username })
    .andWhere({ password: password })
    .then((data) => {
      console.log(data);
      if (data.length) {
        const token = jwt.sign(
          {
            // id: data[0].id,
            username,
          },
          process.env.JWT_SECRET
        );
        console.log(token);
        return res.status(200).json({ token });
      } else {
        return res.status(403).json({
          success: false,
          message: "Username/password combination is wrong",
        });
      }
    })
    .catch((err) => {
      res.status(400).send(`Login error: ${err}`);
    });
};
