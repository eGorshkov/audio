import connect from "../core/connect.js";
import getGain from "../core/gain.js";
import CoreLayer from "./core.layer.js";

export default class ChannelLayer extends CoreLayer {
  keyPress = null;
  name = null;

  constructor(props) {
    const {keyPress, name} = props;
    super(props);
    this.template = document.createElement("button");
    this.gainControl = getGain(this.context);
    connect(this.context.destination, this.gainControl, this.source);

    this.keyPress = keyPress || this.keyPress;
    this.name = name || this.name;
  }
}
