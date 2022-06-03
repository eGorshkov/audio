export default function connect(...connectors) {
    for (let i = 0; i < connectors.length; i++) {
        const curr = connectors[i];
        const next = connectors[i + 1];

        if (!next) return;

        next.connect(curr);
        
    }
}