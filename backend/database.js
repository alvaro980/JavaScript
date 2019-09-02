const mongoose = require('mongoose');

mongoose.connect(process.env.MONDB_URI || 'mongodb://localhost/javaScriptDB',{
    useNewUrlParser:true
})
    .then(db=> console.log('db is connect'))
    .catch(err=> console.log(err));

