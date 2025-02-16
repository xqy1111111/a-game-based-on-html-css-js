class Sprite {
    
    constructor(config) {




        /////image
        this.image = new Image();
        this.image.src = config.src;












      /**
       * animation of a Sprite.
       */
      this.animations = config.animations || {
        idleDown: [[0, 0]],
      };
      this.currentAnimation = config.currentAnimation || "idleDown";
      this.currentAnimationFrame = 0;
    }
}
