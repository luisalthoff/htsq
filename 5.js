
function initDB()
{
    alert('ok');
    var sqlite = require('sqlite3').verbose();
    var db = new sqlite.Database("./luis.db");

    var matrixSignals = new Array();
    var i;

    i = 0;
    db.all('SELECT * FROM alunos', function(err,rows){
        rows.forEach(function(row) {
            matrixSignals[i] = new Object();
            matrixSignals[i].signalID = row.signalID;
            matrixSignals[i].connID = row.connID;
            i++;
        });
        db.close();
        alert('1:' + matrixSignals.length);
    });
}
//console.log('2:' + matrixSignals.length);
