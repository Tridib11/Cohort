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
}


arrows(Direction.Up)
arrows(Direction.Down)