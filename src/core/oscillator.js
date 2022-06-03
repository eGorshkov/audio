/**
 * 
 * @param {AudioContext} context 
 * @param {(filter: BiquadFilterNode): void} setting 
 */
export default function Oscillator(context, setting) {
    const oscillator = context.createOscillator();
    setting(oscillator);
    return oscillator;
}