import connect from "../core/connect.js";
import getSource from "../core/source.js";
import ChannelLayer from "../layers/channel.layer.js";

export class AssetPreset extends ChannelLayer {
  assetPath = null;

  constructor(props) {
    const { assetPath } = props;
    super(props);
    this.assetPath = assetPath;
  }

  async play() {
    const audio = await fetch(this.assetPath);
    const soundBuffer = await audio.arrayBuffer();
    const hiHatBuffer = await this.context.decodeAudioData(soundBuffer);

    this.source = getSource(this.context, hiHatBuffer);
    connect(this.context.destination, this.gainControl, this.source);

    this.configCall.onPlay({ source: this.source, gainControl: this.gainControl });

    this.source.start();
  }

  stop() {
    this.source.stop(0);
    this.source.disconnect();
  }
}
