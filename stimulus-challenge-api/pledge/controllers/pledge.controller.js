const connection = require('../../common/services/mysql.service').connection;

exports.insert = (req, res) => {
    //TODO: get data from req
    var result = "";
    
    connection.connect();

    connection.beginTransaction(function(err) {
        if (err) { throw err; }
        
        let query = 'INSERT INTO pledges SET name=\'' + req.params.name + '\', zipCode=';
        
        connection.query('INSERT INTO posts SET title=?', title, function (error, results, fields) {
            if (error) {
                return connection.rollback(function() {
                    throw error;
                });
            }
            
            connection.commit(function(err) {
                if (err) {
                    return connection.rollback(function() {
                        throw err;
                    });
                }
                console.log('success!');
            });

            var log = 'Post ' + results.insertId + ' added';
        });
    });
    
    connection.end();
    
    return result;
};

exports.getStats = (req, res) => {
    //TODO: get data from req
    let result = {
        nonProfit: 0,
        smallBusiness: 0
    };

    connection.connect();

    connection.query("SELECT SUM(nonProfit) FROM pledges", (error, results, fields) => {
        if (error) throw error;

        result.nonProfit = results[0];
        console.log(results);
    });

    connection.query("SELECT SUM(smallBusiness) FROM pledges", (error, results, fields) => {
        if (error) throw error;

        result.smallBusiness = results[0];
        console.log(results);
    });

    connection.end();

    return result;
};