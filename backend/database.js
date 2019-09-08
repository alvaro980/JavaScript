const mongoose = require('mongoose');

mongoose.connect(process.env.MONDB_URI || 'db://27017/photoInfo',{
    useNewUrlParser:true
})
    .then(db=> console.log('db is connect'))
    .catch(err=> console.log(err));

