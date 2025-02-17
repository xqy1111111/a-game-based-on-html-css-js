class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }
  /////////game loop//////////
  startGameLoop() {
    const step = () => {
      console.log("stepinggggg");


      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //////lower image////////
      this.map.drawLowerImage(this.ctx);
      ///////gameobjects////////////
      Object.values(this.map.gameObjects).forEach((object) => {
        object.x += 0.05;
        object.sprite.draw(this.ctx);
      })


      ///////upper image//////////
      this.map.drawUpperImage(this.ctx);
      requestAnimationFrame(() => {
        step();
     })
    };
    step();
  };
  
  ///////////init////////
  init() {
    this.map = new OverworldMap(window.OverworldMaps.Kitchen);
    this.startGameLoop();
    /////////////////////////////
    console.log("init");
  
  }
}
