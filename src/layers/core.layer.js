import getSoundContext from "../core/sound-context.js";
import getSource from "../core/source.js";

export default class CoreLayer {
  template = null;

  configCall = {
    onPlay() {},
  };

  /**
   * @type {AudioContext}
   */
  context = null;
  /**
   * @type {AudioBuffer}
   */
  buffer = null;
  /**
   * @type {Float32Array}
   */
  channel = null;

  constructor(props) {
    const { configCall } = props;
    [this.context, this.buffer, this.channel] = getSoundContext();
    this.source = getSource(this.context, this.buffer);
    this.configCall = { ...this.configCall, ...configCall };
  }

  async play() {}

  stop() {}
}
