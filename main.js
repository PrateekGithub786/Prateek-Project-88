var canvas = new fabric.Canvas("myCanvas");

var block_img_width = 30;
var block_img_height = 30;

var player_x = 10;
var player_y = 10;

var player_object = "";
var block_img_object = "";

function player_update(){
    
     
    fabric.Image.fromURL("Final_output.png",function(Img){
        player_object = Img;
        player_object.scaleToHeight(block_img_height);
        player_object.scaleToWidth(block_img_width);
        player_object.set({
        top: player_y,
        left:player_x
        });
        canvas.add(player_object);
    });

}

function newImage(get_image){
    fabric.Image.fromURL(get_image, function(Img1){
        block_img_object = Img1;
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.set({
        top: player_y,
        left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    var keyPressed = e.keyCode;
    console.log(keyPressed);

    
    if (e.shiftKey == true && keyPressed == "80") {
        console.log("p and shift key are pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_height").innerHTML = block_img_height;
        document.getElementById("current_width").innerHTML = block_img_width;
    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("p and shift key are pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_height").innerHTML = block_img_height;
        document.getElementById("current_width").innerHTML = block_img_width;
    }

    if (keyPressed == "37") {
        left();
        console.log("left");
    }

    if (keyPressed == "38") {
        up();
        console.log("up");
    }

    if (keyPressed == "39") {
        right();
        console.log("right");
    }

    if (keyPressed == "40") {
        down();
        console.log("down");
    }

    if (keyPressed == "70") {
        newImage("ironman_face.png");
        console.log("f");
    }

    if (keyPressed == "66") {
        newImage("spiderman_body.png");
        console.log("b");
    }

    if (keyPressed == "76") {
        newImage("hulk_legs.png");
        console.log("l");
    }

    if (keyPressed == "82") {
        newImage("thor_right_hand.png");
        console.log("r");
    }

    if (keyPressed == "72") {
        newImage("captain_america_left_hand.png");
        console.log("h");
    }

}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_img_height;
        console.log("block image height = " + block_img_height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_img_height;
        console.log("block image height = " + block_img_height);
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_img_width;
        console.log("block image width = " + block_img_width);
        console.log("When Left arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_img_width;
        console.log("block image width = " + block_img_width);
        console.log("When Right arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}