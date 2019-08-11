const mongoose = require('mongoose');

mongoose.connect(process.env.MONDB_URI,{
    useNewUrlParser:true
})
    .then(db=> console.log('db is connect'))
    .catch(err=> console.log(err));

