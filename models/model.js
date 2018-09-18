var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

module.exports = {
    getAll: function() {
        return MongoClient.connect(url).then(function(client) {
            var db = client.db('youtube');
            var collection = db.collection('videos');
            return collection.find().toArray();
        }).then(function(data) {
            return data;
        });
    },

    getNum: function() {
        return 30;
    },
}
