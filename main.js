var canvas= new fabric.Canvas('myCanvas');
block_image_width=40;
block_image_height=40;
player_x=10;
player_y=10;

var player_object="";
var block_image_object="";
function player_update()  {
    fabric.Image.fromURL("why.jpg" , function(Img)  {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)  {
    fabric.Image.fromURL(get_image , function(Img)  {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",wow);

function wow(e) {
    burger=e.keyCode;
    console.log(burger);
    if(e.shiftKey==true && burger=='80')  {
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && burger=='77')  {
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(burger=='38')  {
        up();
    }
    if(burger=='40')  {
        down();
    }
    if(burger=='37')  {
        left();
    }
    if(burger=='39')  {
        right();
    }
    if(burger=='87')  {
        new_image('wall.jpg');
    }
    if(burger=='71')  {
        new_image('ground.png');
    }
    if(burger=='76')  {
        new_image('light_green.png');
    }
    if(burger=='68')  {
        new_image('dark_green.png');
    }
    if(burger=='67')  {
        new_image('cloud.jpg');
    }
    if(burger=='82')  {
        new_image('roof.jpg');
    }
    if(burger=='84')  {
        new_image('trunk.jpg');
    }
    if(burger=='85')  {
        new_image('unique.png');
    }
    if(burger=='89')  {
        new_image('yellow_wall.png');
    }
}
function up(){
if(player_y>=0){
player_y=player_y-block_image_height;
canvas.remove(player_object);
player_update();    
}
}
function down(){
    if(player_y<=500){
    player_y=player_y+block_image_height;
    canvas.remove(player_object);
    player_update();    
    }
}
    function left(){
        if(player_x>=0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();    
        }
    }
        function right(){
            if(player_x<=850){
            player_x=player_x+block_image_width;
            canvas.remove(player_object);
            player_update();    
            }
        }