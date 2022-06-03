/**
 * 
 * @param {AudioContext} context 
 */
export default function getGain(context, setting) {
    const gainControl = context.createGain();
    setting && setting(gainControl);
    return gainControl;
}