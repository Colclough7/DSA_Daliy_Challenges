/*Write a class Block that creates a block (Duh..)

Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`
Examples
    let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
    b.getWidth() // -> 2
    
    b.getLength() // -> 4
    
    b.getHeight() // -> 6
    
    b.getVolume() // -> 48
    
    b.getSurfaceArea() // -> 88*/






/*JS*/






class Block {
  constructor(data) {
    // Destructure the input array to get width, length, and height
    [this.width, this.length, this.height] = data;
  }

  // Method to return the width of the block
  getWidth() {
    return this.width;
  }

  // Method to return the length of the block
  getLength() {
    return this.length;
  }

  // Method to return the height of the block
  getHeight() {
    return this.height;
  }

  // Method to return the volume of the block (width * length * height)
  getVolume() {
    return this.width * this.length * this.height;
  }

  // Method to return the surface area of the block (2 * (width*length + width*height + length*height))
  getSurfaceArea() {
    return 2 * (this.width * this.length + this.width * this.height + this.length * this.height);
  }
}
