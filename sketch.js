let tiles = 20

function setup() {
  createCanvas(900, 900)
  colorMode(HSB, 360, 100, 100, 100)
  noLoop()
  ellipseMode(CORNER)

}

function draw() {
  
  let tileSize = width / tiles
  let margin = width / 10
  let r
  
  background('#333333')
  stroke(255, 80)
  
  noFill()

  for (let y = margin; y < height - margin; y += tileSize) {
    for (let x = margin; x < width - margin; x += tileSize) {

      r = Math.floor(random(0, 5))
      strokeWeight(8)
      drawArc(x, y, tileSize, r)
      strokeWeight(0.5)
      line(x, y, x + tileSize, y + tileSize)
    
    }
  }
}

function drawArc(x, y, size, orientation) {

  if (orientation == 0) {
    arc(x, y, size, size, 0, PI, CHORD)
  }
  if (orientation == 1) {
    arc(x, y, size, size, PI, TWO_PI, CHORD)
  }
  if (orientation == 2) {
    arc(x, y, size, size, HALF_PI, PI + HALF_PI, CHORD)
  }
  if (orientation == 3) {
    arc(x, y, size, size, PI + HALF_PI, HALF_PI, CHORD)
  }
  if (orientation == 4) {
    ellipse(x, y, size, size)
  }
  if (orientation == 5) {
  }
  
}

function keyPressed() {
  if (key == " ") {
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  }
}