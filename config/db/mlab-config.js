var mongoose = require('mongoose');
var connection = mongoose.connection;

mongoose.connect('mongodb://anker:anker@ds157980.mlab.com:57980/ankerpeetinspire', {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
})

connection.on('error', (err) => {
    console.log('Mlab ERROR you fool:', err);
})

connection.once('open', () => {
    console.log('CONNECTED to Mlab or whatever');
})