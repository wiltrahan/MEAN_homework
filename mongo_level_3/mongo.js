var mongo = function(db) {
  //find all monsters with an attack lower than 10
  db.monsters.find({"attack": {"$lt": 10}})

  //find all monsters with a level above 5 but below 15 inclusive
  db.monsters.find({"level": {"$gte": 5, "$lte": 15}})

  //find monsters that do not have the “bite” attack.
  db.monsters.find({"attack": {"$ne": "bite"}})

  // find monsters with levels less than 6 but only return the name, level and health attributes
  db.monsters.find(
    {"level": {"$lt": 6}},
    {"name": true, "level": true, "health": true, "_id": false}
  )

  // find all monsters who attack is between 10 and 20 but do not include the monsters health or style
  db.monsters.find(
    {"attack": {"$gte": 10, "$lte": 20}},
    {"health": false, "style": false}
  )
  //find out how many monsters are in the collection.
  db.monsters.find().count()

  //sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
  db.monsters.find().sort({"level": -1})

};
