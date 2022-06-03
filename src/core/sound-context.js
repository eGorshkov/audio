/**
 *
 * @returns {[AudioContext,AudioBuffer,Float32Array]}
 */
export default function getSoundContext() {
  const context = new AudioContext();
  const buffer = context.createBuffer(
    1,
    context.sampleRate * 1,
    context.sampleRate
  );
  const channel = buffer.getChannelData(0);
  return [context, buffer, channel];
}
