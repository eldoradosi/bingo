//---------------------------------------------------------------------------------------------------------------------------------------------
// Cartones
// cambiar a Local Storage? Implementar la definición de los cartones por el usuario?

var numeros_por_carton = 10;

var carton = 
[
    [ "1297_1",  5,11,28,38,49,52,58,68,76,85],
    [ "1297_2",  9,12,23,37,45,59,66,72,73,89],

    [ "1298_1",  3,19,23,24,39,46,55,60,76,81],
    [ "1298_2",  8,18,26,38,43,51,58,61,79,89],

    [ "1299_1",  6,16,24,37,45,46,59,61,73,82],
    [ "1299_2",  3,13,21,38,44,51,65,66,74,84],

    [ "1300_1",  5,10,24,32,47,58,66,75,81,89],
    [ "1300_2",  6,19,23,38,48,51,53,68,70,83],

    [ "1569_1",  8,19,20,34,45,53,66,69,74,82],
    [ "1569_2",  6,10,28,33,42,59,61,63,78,85],

    [ "1570_1",  9,15,25,33,42,56,66,73,75,90],
    [ "1570_2",  4,13,24,32,40,58,62,70,88,89],

    [ "1571_1",  7,17,29,38,43,46,55,63,74,81],
    [ "1571_2",  6,13,24,32,48,57,62,72,84,85],

    [ "1572_1",  1,10,21,30,40,44,50,65,73,80],
    [ "1572_2",  2,13,28,31,35,46,59,61,71,87]

]

//---------------------------------------------------------------------------------------------------------------------------------------------
// Variables globales

var bola_cantada = new Array();
var cantados_en_carton = new Array();

// Resaltar una celda en la tabla de cartones
function resaltar_en_tabla( fila, columna, si)
{
    // fila + 1 a causa de la cabecera de tabla
    document.getElementById("myTableData").rows[fila+1].cells[columna].style.backgroundColor = si ? "\#ff0000" : "\#D8E8F5";
}

// se cantó una nueva bola
function nueva_bola( numero, si)
{
    for ( i = 0; i < carton.length; i++)
    {
        for (j = 1; j < numeros_por_carton + 1; j++)
        {
            if ( carton[i][j] == numero )
            {
                if (si)
                {
                    cantados_en_carton[i] += 1;
                }
                else
                {
                    if (cantados_en_carton[i] == numeros_por_carton)
                    {                
                        resaltar_en_tabla( i, 0, si);
                    }
                    cantados_en_carton[i] -= 1;
                }
                resaltar_en_tabla( i, j, si);
                if (cantados_en_carton[i] == numeros_por_carton)
                {                
                    var mensaje = "BINGO!!! \"" + carton[i][0] + "\": ";
                    for ( k = 1; k < numeros_por_carton + 1; k++)
                    {
                        mensaje += carton[i][k];
                        if (k != 10)
                        {
                            mensaje += ", ";                        
                        }
                    }
                    alert( mensaje);
                    resaltar_en_tabla( i, 0, si);
                }
            }
        }
    }
}

// se seleccionó/deseleccionó un nuevo número
function resaltar_bola_cantada(myId)
{
    var myCell = document.getElementById(myId);

    if ( !bola_cantada[myId] )
    {
        myCell.style.backgroundColor = "\#ff0000";
        bola_cantada[myId] = 1; // marcar como cantado
        nueva_bola( myId, 1);
    }
    else
    {
        myCell.style.backgroundColor = "\#D8E8F5";
        bola_cantada[myId] = 0; // marcar como no cantado
        nueva_bola( myId, 0);
    }
}

function agregar_carton_a_tabla( id_carton)
{
    var tabla = document.getElementById("myTableData");

    var cant_filas = tabla.rows.length;
    var fila = tabla.insertRow( cant_filas);

    for ( i = 0; i < numeros_por_carton + 1; i++)
    {
        fila.insertCell(i).innerHTML = carton[id_carton][i];
    }
}

function inicializar()
{
	count = 0;

	for ( i = 0; i < 9; ++i)
	{
		for( j = 1; j < 11; ++j)
		{
			cellId = i*10 + j;

            bola_cantada[cellId] = 0; // inicializar a no cantado

			cell = document.getElementById( cellId);

			cell.appendChild( document.createTextNode(cellId));

			count++;
		}
	}

    for ( var i = 0; i < carton.length; ++i)
    {
	    agregar_carton_a_tabla( i);
        cantados_en_carton[i] = 0; // ningun número cantado hasta ahora
    }
}
