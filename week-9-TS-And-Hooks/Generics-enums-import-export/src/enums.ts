enum Direction{
  Up,
  Down,
  Left,
  Right,
  Bottom
}


function arrows(arrow:Direction){
  if(arrow===Direction.Up){
    console.log("Move up")
  }
  else{
    console.log("Wrong input")
  }
}


arrows(Direction.Up)
arrows(Direction.Down)