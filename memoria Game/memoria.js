let board;
let tarjetasMostradas = 0;
let arregloSelecciones = []

function createBoard(numRows,numCols){
    randomEmoji()
    let rows = []
    for(let i = 0; i< numRows;i++){
        let casillas = []
        //crear casillas
        for(let j = 0 ; j< numCols; j++){
            casillas.push({
                seMuestra: false,
                emoji: arrayEmojis.pop()
            });

        }
            
        rows.push(casillas)
    }
   // console.log("Se crearon : " + numRows + " filas")
    //console.log("Se crearon: " + numCols + " columnas")
    return rows;
}

function setValue(board, row, col , value){
    board[row][col] = value
    console.log(board)
}

//function getValue(board , row , col){
    const getValue = (board,row,col) =>{
        return board[row][col]
    }



const renderizarBoard = (board) =>{
    for(let i = 0 ; i<board.length ; i++){
        const casillas = board[i]
        for(let j = 0; j< casillas.length ; j++){
            const butCasilla = document.getElementById(i + "x" + j)//cambiar por interpolación de strings
            if(casillas[j].seMuestra){
                butCasilla.innerHTML = casillas[j].emoji
            }
            else{
                butCasilla.innerHTML = " "
            }
        }
    }
}

function randomEmoji(){
    arrayEmojis = [ //arreglo de emojis para un total de 24 casillas (solo dos emojis se repiten por tablero.)
    "&#127763;",
    "&#127764;",
    "&#127765;",
    "&#127766;",
    "&#127767;",
    "&#127768;",
    "&#127769;",
    "&#127770;",
    "&#127771;",
    "&#127772;",
    "&#127773;",
    "&#127774;",

    "&#127763;",
    "&#127764;",
    "&#127765;",
    "&#127766;",
    "&#127767;",
    "&#127768;",
    "&#127769;",
    "&#127770;",
    "&#127771;",
    "&#127772;",
    "&#127773;",
    "&#127774;",
    
]
    arrayEmojis.sort(() =>{
        return Math.random()-0.5
    })
}

const casillaOnClick = (row, col) =>{
    vacio = []
        const casilla = getValue(board,row,col)
        casilla.seMuestra = true;
    if(arregloSelecciones.length<2){
        arregloSelecciones.push(casilla)
        renderizarBoard(board)
    }
    if(arregloSelecciones.length == 2){
        setTimeout(compararCasillas,100)
    }
    setTimeout(mensajeGanaste,100)
    console.log(tarjetasMostradas)
}

const compararCasillas =()=>{
    vacio = []
        if(arregloSelecciones[0].emoji == arregloSelecciones[1].emoji){
            alert("Bien, acertaste")
            arregloSelecciones[0].seMuestra = true;
            arregloSelecciones[1].seMuestra = true;
            arregloSelecciones = vacio
            renderizarBoard(board)
            tarjetasMostradas++
        }
        else{
            console.log(arregloSelecciones)
            alert("te equivocaste, intenta otra vez");
            arregloSelecciones[0].seMuestra = false;
            arregloSelecciones[1].seMuestra = false;
            arregloSelecciones = vacio
            renderizarBoard(board)
        }
    
}

const mensajeGanaste =() =>{
    if(tarjetasMostradas == 24){
        alert("ganaste")
    }
}


const main = () =>{
    board = createBoard(6,4,true)
    renderizarBoard(board)
}

main()