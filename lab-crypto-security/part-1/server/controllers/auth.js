const bcrypt = require('bcryptjs');
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          if (bcrypt.compareSync(password, users[i].passwordHash)) {
            console.log(`stored user password ${users[i].passwordHash}`)
            console.log(`compare sync password ${bcrypt.compareSync(password, users[i].passwordHash)}`)
            let userToReturn = {...users[i]}
            delete userToReturn.passwordHash;
            res.status(200).send(userToReturn);
            return
          }
        }
      }
      res.status(400).send("User not found.")
      return
    },
    register: (req, res) => {
        console.log('Registering User')
        const {username, email, firstName, lastName, password} = req.body;
        const salt = bcrypt.genSaltSync(5);
        const passwordHash = bcrypt.hashSync(password, salt);
        
        let userObj = {
          username,
          email,
          firstName,
          lastName,
          passwordHash,
        }
        users.push(userObj);
        let userToReturn = {...userObj};
        // console.log(userToReturn)
        delete userToReturn.passwordHash;
        // console.log(userToReturn);
        res.status(200).send(userToReturn);
        return
    }
}