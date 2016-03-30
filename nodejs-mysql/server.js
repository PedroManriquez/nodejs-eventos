var mysql= require('mysql');
//parametro de conexion a BD mysql

var connection = mysql.createConnection({
	host		: 'localhost',
	user		: 'root',
	password	: '1234',
	database	: 'node.js'
});

function serverStartSQL(){

	// si ha ocurrido un error
	connection.connect(function(error){
		if(error){
			throw error;
		}else{
			console.log('Conexion correcta.');
		}
	});

	var insert = connection.query("INSERT INTO personaje(nombre, apellido, biografia) VALUES ('Homero', 'Simpsom', 'esposo de marge y padre de bart lisa y maggie')",
	function(error, result){
		if(error){
			throw error;
		}else{
			console.log(result);
		}
	};
	var select = connection.query('select * from personaje where personaje_id= ?',[1]);
	function(error, result){
		if(error){
			throw error;
		}else{
			var resultado= result;
			if(resultado.length>0){
				console.log(resultado[0].nombre + ' '+resultado[0].apellido + ' '+resultado[0].biografia);

			}else{
				console.log("registro no encontrado");
			}
		}
	}
};
connection.end();
}
export.start=serverStartSQL;