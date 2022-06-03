/**
 * 
 * @param {AudioContext} context 
 * @param {(filter: BiquadFilterNode): void} setting 
 */
export default function Filter(context, setting) {
    const filter = context.createBiquadFilter();
    setting(filter);
    return filter;
}