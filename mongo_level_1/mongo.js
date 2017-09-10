function insertDocuments(name, health, last_fought, attacks) {
  //create the myGame database and connect to it
  var db = connect('127.0.0.1:27017/myGame');

  //create the monsters collection and add documents to it
  db.monsters.insert({
    "name": name,
    "health": health,
    "last_fought": last_fought,
    "attacks": attacks
  });

  //print all monsters to the console
  console.log(db.monsters.find());
};

//find monster by name
db.monsters.find({"name": "Jebron Lames"})

//find by attack, will return both monsters
db.monsters.find({"attacks": "punch"})

//find monster based on defense stat
db.monsters.find({"defense": 2})
