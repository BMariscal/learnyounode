/*

In this exercise the database name is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout.

*/
const url ='mongodb://localhost:27017/learnyoumongo';
const collectionName = 'parrots';
const MongoClient = require('mongodb').MongoClient;
const minage = process.argv[2];

MongoClient.connect(url, function(err,db){
    const collection = db.collection(collectionName)
    collection.find({age:{$gt:Number(minage)}}).toArray(function(err, docs) {
            if (err) throw err
            console.log(docs)
            db.close();
        });
})



