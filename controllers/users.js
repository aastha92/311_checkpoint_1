const users = require('../data/index');
const sampleUser = require('../data/sampleUser');
let counter = users.length;
let userList = users;

//-------------------------------------------list of all the users-----------------------------------
const listUsers  = (req,res) => {
    res.json(users);
};

//-------------------------------------------single user--------------------------------------------
const showUser  = (req,res) => {
    const userobj = users.find(singleuser => singleuser.id == req.params.id);
    if (userobj == null) {
        res.status(404).send('User not found!');
    }
    res.json(userobj);
};

//------------------------------------------create user----------------------------------------------
const createUser = (req,res)=>{
    counter++;
    const newUser = {
        "_id": counter,
        "name": sampleUser.name,
        "username": sampleUser.username,
        "email": sampleUser.email,
        "address": {
            "street": sampleUser.address.street,
            "suite": sampleUser.address.suite,
            "city": sampleUser.address.city,
            "zipcode": sampleUser.address.zipcode,
            "geo": {
            "lat": sampleUser.address.geo.lat,
            "lng": sampleUser.address.geo.lng
            }
        },
        "phone": sampleUser.phone,
        "website": sampleUser.website,
        "company": {
            "name": sampleUser.company.name,
            "catchPhrase": sampleUser.company.catchPhrase,
            "bs": sampleUser.company.bs
        }
    }
      users.push(newUser);
      res.json(users);
}

//--------------------------------------------update user------------------------------------------------
const updateUser = (req,res) => {
    userposition = userList.findIndex(user => user.id == req.params.id);
    //console.log(userposition);
    if (userposition == -1) {
        res.status(400).send('User not found!');
    }
    userList[userposition].name = sampleUser.name;
    userList[userposition].username = sampleUser.username;
    userList[userposition].email = sampleUser.email;
    userList[userposition].address.street = sampleUser.address.street;
    userList[userposition].address.suite = sampleUser.address.suite;
    userList[userposition].address.city = sampleUser.address.city;
    userList[userposition].address.zipcode = sampleUser.address.zipcode;
    userList[userposition].address.geo.lat = sampleUser.address.geo.lng;
    userList[userposition].phone = sampleUser.phone;
    userList[userposition].website = sampleUser.website;
    userList[userposition].company.name = sampleUser.company.name;
    userList[userposition].company.catchPhrase = sampleUser.company.catchPhrase;
    userList[userposition].company.bs = sampleUser.company.bs;
    res.send(userList[userposition]) 
  }



//-------------------------------------------delete user ---------------------------------------------------
const deleteUser = (req,res)=>{
    userposition = userList.findIndex(user => user.id == req.params.id);
    if (userposition == -1) {
        res.status(400).send('User not found!');
    }
    userList = userList.filter(user => user.id != req.params.id);
    res.send(userList);
  }


module.exports = { listUsers , showUser , createUser , updateUser , deleteUser} 