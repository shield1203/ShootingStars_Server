module.exports = function(app)
{
    var mysql = require('mysql');
    var user = require('./user');
    var con = mysql.createConnection(user);
    
    app.get('/', function(req, res){
        res.send('Start Test');
    }); 
    
    app.get('/list', function(req, res){
        //con.connect();

        con.query('SELECT * FROM list ORDER BY score DESC', function (error, results, fields) {
            if(error){
                console.log(error);
            }
            else{
                var data = "";
                console.log(results);
                
                for(var i in results){
                    data += results[i].name
                    data += " "
                    data += results[i].score
                    data += " "
                }
                
                res.send(results);
            }
        });

        //con.end();
    });
    
    app.get('/insert', function(req, res){
        var name= req.query.name;
        var score = req.query.score;
        var sql = 'INSERT INTO list (name, score) VALUES(?, ?)';
        var params = [name, score];
        
        //con.connect();

        con.query(sql, params, function (error, results, fields) {
            if(error){
                console.log(error);
            }
    
            console.log(name + ', ' + score + '추가완료');
            res.send('ENDGAME');
        });
        //con.end();
    });
}