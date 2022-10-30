export default class Banner {
  constructor(canva) {
    this.canva = canva;
    this.text = "Banner"
    this.txtDots = []
    this.frames = 0;
    this.font = new FontFace('myFont', 'url(assets/fonts/Barlow/Barlow-Light.ttf)');
  }
  init(type, speed) {
    this.speed = speed;
    this.type = type
    this.generate("BUG!!!  Call the doc!")
  }
  generate(txt) {
    const ctx = document.createElement("canvas").getContext("2d");
    let w = 118;
    let h = 10;
    let data32;
    this.font.load().then((font) => {
      document.fonts.add(font);
      console.log('Font loaded');
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.font = "14px myFont";
      ctx.fillText(txt, 0, 10);
      data32 = new Uint32Array(ctx.getImageData(0, 0, w, h).data.buffer);
      for (let i = 0; i < data32.length; i++) {
        if (data32[i] & 0xff000000) {
          let y = (i % w) + 46;
          let x = ((i / w) | 0)
          this.txtDots.push({
            _y: y, x, y,
          })
        }
      }
    })
  }
  sinWave() {
    let w = 32;
    let h = 10;
    let amplitude = h;
    let frequency = .067;
    let phi = 1;
    let draw = () => {
      this.frames++
      phi = this.frames / 30;
      for (let i = 0; i < w; i++) {
        let y = Math.cos(i * frequency + phi) * amplitude / 2 + amplitude / 2;
        let y2 = Math.sin(i * frequency + phi) * amplitude / 2 + amplitude / 2;
        this.canva.raws[Math.trunc(y)][Math.trunc(i)].className = `active__grid`;
        this.canva.raws[Math.trunc(i)][Math.trunc(y2)].className = `active__grid`;
        this.canva.raws[Math.trunc(y+11)][Math.trunc(i)].className = `active__grid`;
        this.canva.raws[Math.trunc(i)][Math.trunc(y2+11)].className = `active__grid`;
        this.canva.raws[Math.trunc(y+22)][Math.trunc(i)].className = `active__grid`;
        this.canva.raws[Math.trunc(i)][Math.trunc(y2+22)].className = `active__grid`;

      }
    }
    draw()
  }
  render() {
    this.sinWave()
    let s = this.canva.size
    for (let a of this.txtDots) {
      let newY = Math.trunc(a.y)
      if (a.x < s && newY < s && a.x >= 0 && newY >= 0) {
        this.canva.raws[a.x + 33][newY].className = `active__${this.type}`;
      }
      if (a.y >= a._y - 160) {
        a.y -= 0.25
      } else {
        a.y = a._y
      }
    }
  }
}
