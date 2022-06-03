export default class RackItem {
  #bindHandlePress = this.#handlePress.bind(this);
  #asset = null;

  template = document.createElement("button");

  /**
   *
   * @param {ChannelLayer} asset
   */
  constructor(asset) {
    this.#asset = asset;
    this.template.classList.add("rack-item");
    this.template.innerText = this.#asset.name;
    this.template.addEventListener("click", this.#bindHandlePress);

    this.template.style.backgroundColor = `hsla(${[
      Math.floor(Math.random() * (360 + 1)),
      "75%",
      "70%",
    ].join(", ")}, .3)`;

    if (this.#asset.keyPress)
      document.addEventListener("keypress", this.#bindHandlePress);
  }

  /**
   *
   * @param {Event} e
   */
  #handlePress(e) {
    if (e.type === "click" || e.key === this.#asset.keyPress) {
      this.template.style.transform = "scale(1.1)";
      this.#asset.play().then(() => {
        setTimeout(() => {
          this.template.style.transform = "scale(1)";
        }, this.#asset.context.currentTime + 1);
      });
    }
  }
}
