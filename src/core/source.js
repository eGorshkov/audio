/**
 * 
 * @param {AudioContext} context 
 * @param {AudioBuffer} buffer 
 */
export default function getSource(context, buffer) {
    const source = context.createBufferSource();
    source.buffer = buffer;
    return source;
}