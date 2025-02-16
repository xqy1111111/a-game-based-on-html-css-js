class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    //////////////////////
    this.lowerImage = new Image();
    this.upperImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }
  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "/images/maps/DemoLower.png",
    upperSrc: "/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 5,
        y: 6,
      }),
      npc1: new GameObject({
        x: 7,
        y: 9,
        src: "/images/characters/people/npc1.png",
      }),
    },
  },
  Kitchen: {
    lowerSrc: "/images/maps/KitchenLower.png",
    upperSrc: "/images/maps/KitchenUpper.png",
    gameObjects: {
      npc2: new GameObject({
        x: 6,
        y: 5,
        src: "/images/characters/people/npc2.png",
      }),
      npc3: new GameObject({
        x: 6,
        y: 9,
        src: "/images/characters/people/npc3.png",
      }),
    },
  },
  Street: {},
};
