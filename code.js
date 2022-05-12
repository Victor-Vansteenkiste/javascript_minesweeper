var my_field = [[],[],[],[],[],[],[],[],[],[]];

window.onload = function(){
    draw_field(my_field);
}

// Disable context menu on right click
document.oncontextmenu = right_click;
function right_click(cell){
    cell.preventDefault();
}
    


function draw_field(field, width = 10, height = 10){
    let field_html = generate_field_html(field, width, height);
    document.getElementById("field_container").innerHTML = field_html;
}

// functions that fills my_field with zeros
function fill_default(field, width = 10){
    
    for(let i = 0; i < field.length; i++){
        for(let j = 0; j < width; j++){
            field[i].push(0); 
            
        }
    }
    return field;
}   



function generate_random_number(min, max){
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

// function generates random mines in the field (10% of the total field are mines)
function generate_random_mines(field, width = 10, height = 10){
    let area = width * height;
    let amount = Math.ceil(0.10 * area);
    let k = 1;
    while(k <= amount){
        let i = generate_random_number(0,height -1);
        let j = generate_random_number(0,width - 1);
        if (field[i][j] == 0){
            field[i][j] = 9;
            k++;
        }
        
    }
    return field;
}

function generate_numbers(field){
    let mines = find_mines(field);
    for(let m = 0; m < mines.length; m++){
        let row_mine = mines[m][0];
        let col_mine = mines[m][1];

        for(let i = 0; i < field.length ; i++){
            for( let j = 0; j < field[i].length; j++){
                if (i == row_mine && (j == col_mine-1 || j == col_mine+1)){
                    if(field[i][j]!= 9){
                        field[i][j] += 1;
                    }
                }
                if (j == col_mine &&  (i == row_mine-1 || i == row_mine+1)){
                    if(field[i][j]!= 9){
                        field[i][j] += 1;
                    }
                }
                if ((i == row_mine + 1 || i == row_mine - 1) && (j == col_mine-1 || j == col_mine+1)){
                    if(field[i][j] != 9){
                        field[i][j] += 1;
                    }
                }
                

            }
        }
                
    }
    return field;
}


// function creates a table with the coordinates of the mines in the field
function find_mines(field) {
    let mines = [];
    for(let i = 0; i < field.length ; i++){
        for( let j = 0; j < field[i].length; j++){
            if (field[i][j] == 9){
                mines.push([i, j]);
            }
        }
    }
    return mines
}


// This function gets run when the user enters specific dimensions of for the field 
function change_dimensions_field(){
    my_field = [];
    let width = document.getElementById("width_field").value;
    let height = document.getElementById("height_field").value;
    draw_field(my_field, width, height);
    reset();
    
}
// function for changing the starting my_field based on the input from the user
function change_length_field(field, height = 10){
    for(let i = 0; i < height;i++){
        if(i >= field.length){
            field.push([]);
        }
    }
    return field;
}

// generates the minefield in HTML
function generate_field_html(field, width, height){
    let changed_field = change_length_field(field, height);
    let  zero_field = fill_default(changed_field, width);
    let  mine_field = generate_random_mines(zero_field, width, height);
    let  complete_field = generate_numbers(mine_field);
    let field_inner_html = "";
    
    for (let i = 0; i < complete_field.length; i++){
        let row_html = "<tr>";
        for(let j = 0; j < complete_field[i].length; j++){
            for(let m = 1; m < 9; m++){
                if(complete_field[i][j] == m){
                    
                    row_html += `<td id = \"${i}_${j}\" class = \"number_${m}\" onmousedown = \"mouse_down(event, this)\" onclick = \"onclick_number(this,event)\"></td>`;
                }   
            }
            if(complete_field[i][j] == 0){
                
                row_html += `<td id = \"${i}_${j}\" onmousedown = \"mouse_down(event, this)\" onclick = \"onclick_empty(this, event)\"></td>`;
            
            }
            if(complete_field[i][j] == 9){
                
                row_html += `<td id = \"${i}_${j}\" onmousedown = \"mouse_down(event, this)\" onclick = \"onclick_mine(this)\"></td>`;
                
            }
        }
        row_html += "</tr>";
        field_inner_html += row_html;
    
    }
    return `<table class = "field">${field_inner_html}</table>`;
}


// function gets executed when user presses on mine
function onclick_mine(cell){
    let col = cell.cellIndex;
    let row = cell.parentNode.rowIndex;

    let id = `${row}_${col}` ;
        
    let mine_cell = document.getElementById(`${id}`);
    if (mine_cell.innerHTML != "<img src=\"flag.png\" alt=\"picture of flag\" width=\"40\" height=\"40\">"){
        mine_cell.innerHTML = "<img src=\"bomb.png\" alt=\"picture of bomb\" width=\"40\" height=\"40\">";
        alert("YOU LOSE");
        stop();
        show_field(my_field);
    }
    
}


// function gets executed when user presses on a number
function onclick_number(cell,e){
    let col = cell.cellIndex;
    let row = cell.parentNode.rowIndex;

    let id = `${row}_${col}` ;
    let number_cell = document.getElementById(`${id}`);
    if (number_cell.innerHTML != "<img src=\"flag.png\" alt=\"picture of flag\" width=\"40\" height=\"40\">"){
        number_cell.innerHTML = my_field[row][col];
        number_cell.classList.add("checked");
    }
    
}


// function gets executed when user presses on an empty square
function onclick_empty(cell,e){
    let col = cell.cellIndex;
    let row = cell.parentNode.rowIndex;
    let id = `${row}_${col}`;


    if(document.getElementById(`${id}`).innerHTML != "<img src=\"flag.png\" alt=\"picture of flag\" width=\"40\" height=\"40\">"){
        document.getElementById(`${id}`).classList.add("checked");
        check_surround(row, col);
    }

    
}


// checks surroundings of clicked element (also includes the edge cases)
function check_surround(row, col){
    if(row == 0){
        if(col == 0){
           check_under(row, col);
           check_right(row, col);
           check_right_under(row, col);
        }
        if(col == my_field[row].length-1){
            check_under(row, col);
            check_left(row, col);
            check_left_under(row, col);

        }
        else{
            check_under(row, col);
            check_right(row, col);
            check_left(row, col);
            check_right_under(row, col);
            check_left_under(row, col);

        }
    }
    if(col == 0 && row != 0){
        if(row == my_field.length-1){
            check_above(row, col);
            check_right(row, col);
            check_right_above(row, col);
        }
        else{
            check_above(row, col);
            check_under(row, col);
            check_right(row, col);
            check_right_above(row, col);
            check_right_under(row, col);
        }
    }
    if (row == my_field.length-1 && col != 0){
        if(col == my_field[row].length-1){
            check_above(row, col);
            check_left(row, col);
            check_left_above(row, col);
        }
        else{
            check_above(row, col);
            check_left(row, col);
            check_right(row, col);
            check_right_above(row, col);
            check_left_above(row, col);
        }
    }
    if(col == my_field[row].length-1 && row != my_field.length-1 && row != 0){
            check_above(row, col);
            check_left(row, col);
            check_under(row, col);
            check_left_above(row, col);
            check_left_under(row, col);
    }
    if(row != 0 && col != 0 && row != my_field.length-1 && col != my_field[row].length-1){
            check_above(row, col);
            check_under(row, col);
            check_left(row, col);
            check_right(row, col);
            check_right_above(row, col);
            check_right_under(row, col);
            check_left_above(row, col);
            check_left_under(row, col);
    }
    

    
}

function check_under(row, col){
    if(my_field[row+1][col] == 0){
        let id = `${row+1}_${col}`;
        click_neighbor(id);
    }
    else if(my_field[row+1][col] != 9){
        let id = `${row+1}_${col}`;
        click_neighbor(id);
    }
}

function check_above(row, col){
    if(my_field[row-1][col] == 0){
        let id = `${row-1}_${col}`;
        click_neighbor(id);
    }
    else if(my_field[row-1][col] != 9){
        let id = `${row-1}_${col}`;
        click_neighbor(id);
    }
}
function check_right(row, col){
    if(my_field[row][col+1] == 0){
        let id = `${row}_${col+1}`;
        click_neighbor(id);
    }
    else if(my_field[row][col+1] != 9){
        let id = `${row}_${col+1}`;
        click_neighbor(id);
    }
}
function check_left(row, col){
    if(my_field[row][col-1] == 0){
        let id = `${row}_${col-1}`;
        click_neighbor(id);
    }
    else if(my_field[row][col-1] != 9){
        let id = `${row}_${col-1}`;
        click_neighbor(id);
    }
}

function check_right_above(row, col){
    if(my_field[row-1][col+1] == 0){
        let id = `${row-1}_${col+1}`;
        click_neighbor(id);
    }
    else if(my_field[row-1][col+1] != 9){
        let id = `${row-1}_${col+1}`;
        click_neighbor(id);
    }
}

function check_right_under(row, col){
    if(my_field[row+1][col+1] == 0){
        let id = `${row+1}_${col+1}`;
        click_neighbor(id);
    }
    else if(my_field[row+1][col+1] != 9){
        let id = `${row+1}_${col+1}`;
        click_neighbor(id);
    }
}



function check_left_above(row, col){
    if(my_field[row-1][col-1] == 0){
        let id = `${row-1}_${col-1}`;
        click_neighbor(id);
    }
    else if(my_field[row-1][col-1] != 9){
        let id = `${row-1}_${col-1}`;
        click_neighbor(id);
    }
}
function check_left_under(row, col){
    if(my_field[row+1][col-1] == 0){
        let id = `${row+1}_${col-1}`;
        click_neighbor(id);
    }
    else if(my_field[row+1][col-1] != 9){
        let id = `${row+1}_${col-1}`;
        click_neighbor(id);
    }
}

function click_neighbor(id){
    if(document.getElementById(`${id}`)!= null){
        if(! document.getElementById(`${id}`).classList.contains("checked")){
            document.getElementById(`${id}`).click();
        }
    }
}

// Counting the amount of clicks on elements
let clicks = 0;
function click_counter(){
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}


// function that inserts flag on right click and adds to click counter on left click
function mouse_down(e, cell){
    let col = cell.cellIndex;
    let row = cell.parentNode.rowIndex;

    let id = `${row}_${col}` ;
    let flag_cell = document.getElementById(`${id}`);

    if(e.button == 2){
        
        if (flag_cell.innerHTML == "<img src=\"flag.png\" alt=\"picture of flag\" width=\"40\" height=\"40\">"){
            flag_cell.innerHTML = "";
        }
        else if(flag_cell.classList.contains("checked")&& flag_cell.innerHTML ==""){
            flag_cell.innerHTML = "";
        } 
        else if (flag_cell.innerHTML == ""){
            flag_cell.innerHTML = "<img src=\"flag.png\" alt=\"picture of flag\" width=\"40\" height=\"40\">"
            check_game_win(my_field);
        }
    }
    else if(e.button == 0){

        if(flag_cell.innerHTML != "<img src=\"flag.png\" alt=\"picture of flag\" width=\"40\" height=\"40\">" && !flag_cell.classList.contains("checked")){
            click_counter();
        }
        if(document.getElementById("clicks").innerHTML == "1"){
            start()
        }
        
    }

}


// function checks if the player wins the game
function check_game_win(my_field){
    let mines = find_mines(my_field);
    let amount_bombs = 0;
    for(let i = 0; i<mines.length; i++){
        let row_mine = mines[i][0];
        let col_mine = mines[i][1];
        let id_bomb = `${row_mine}_${col_mine}`;
        let bomb = document.getElementById(`${id_bomb}`);

        if(bomb.innerHTML == "<img src=\"flag.png\" alt=\"picture of flag\" width=\"40\" height=\"40\">"){
            amount_bombs += 1;
        }
    }
    let amount_flags = 0;
    for(let k = 0; k < my_field.length; k++){
        for(let j = 0; j < my_field[k].length; j++){
            let id_element = `${k}_${j}`;
            let element = document.getElementById(`${id_element}`);
            if(element.innerHTML == "<img src=\"flag.png\" alt=\"picture of flag\" width=\"40\" height=\"40\">"){
                amount_flags += 1;
            }
        }
    }
    if(amount_bombs == mines.length && amount_bombs == amount_flags){
        alert("YOU WIN");
        make_game_unclickable();
        stop();
        
    }
}


// function shows the field when the user loses 
function show_field(field){
    for(let i = 0; i < field.length; i++){
        for(let j = 0; j < field[i].length; j++){
            let id = `${i}_${j}`;
            let element = document.getElementById(`${id}`)
            element.classList.add("checked");
            if(field[i][j] != 9 && field[i][j] != 0){
                element. innerHTML = field[i][j];
            }
            else if (field[i][j] == 9){
                element.innerHTML = "<img src=\"bomb.png\" alt=\"picture of bomb\" width=\"40\" height=\"40\">";
            }
            else if(field[i][j] == 0){
                element.innerHTML = "";
            }
        }
    }
    
}

// function reloads the page
function new_game(){
    location.reload();
}


// function makes the field unclickable after the user wins the game
function make_game_unclickable(){
    let field = document.getElementById("field_container");
    field.classList.add("end_game");
}


// Timer
var time_passed = 0;
var timer;
function add_seconds(){
    time_passed++;
    document.getElementById("timer").innerHTML = time_passed;
}
function start(){
    timer = setInterval(add_seconds, 1000);
}
function stop(){
    clearInterval(timer); 
}
function reset(){
    time_passed = 0;
    document.getElementById("timer").innerHTML = "";
    stop();
    
}



