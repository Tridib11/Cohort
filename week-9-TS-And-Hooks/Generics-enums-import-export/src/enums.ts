enum Direction{
  Up,
  Down,
  Left,
  Right
}


function arrows(arrow:Direction){
  if(arrow===Direction.Up){
    console.log("Move up")
  }
}


arrows(Direction.Up)
arrows(Direction.Down)