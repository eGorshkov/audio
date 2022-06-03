import { AssetPreset } from "./presets/asset.preset.js";
import RackItem from "./ui/rack/rack-item.js";
import RackUI from "./ui/rack/rack.js";

const config = [
  {
    type: "asset",
    config: {
      assetPath: "../assets/kick.mp3",
      name: "Kick",
      keyPress: "1",
      configCall: {
        onPlay({ source }) {
          source.playbackRate.setValueAtTime(0.5, 0);
        },
      },
    },
  },
  {
    type: "asset",
    config: {
      assetPath: "../assets/snare.mp3",
      name: "Snare",
      keyPress: "2",
      configCall: {
        onPlay({ source }) {
          source.playbackRate.setValueAtTime(1.2, 0);
        },
      },
    },
  },
  {
    type: "asset",
    config: {
      assetPath: "../assets/ride.mp3",
      name: "Ride",
      keyPress: "2",
      configCall: {
        onPlay({ source, gainControl }) {
          source.playbackRate.setValueAtTime(1.5, 0);
        },
      },
    },
  },
  {
    type: "asset",
    config: {
      assetPath: "../assets/hatOpen2.mp3",
      name: "Hi hat",
      keyPress: "k",
      configCall: {
        onPlay({ source }) {
          source.playbackRate.setValueAtTime(1.5, 0);
        },
      },
    },
  },
];

const SOUNDS = {
  asset: AssetPreset,
};

function load() {
  const RACK_UI = new RackUI();

  config
    .map((item) => new SOUNDS[item.type](item.config))
    .map((asset) => new RackItem(asset))
    .forEach((item) => RACK_UI.set(item));

  document.body.appendChild(RACK_UI.template);
}

window.onload = () => load();
