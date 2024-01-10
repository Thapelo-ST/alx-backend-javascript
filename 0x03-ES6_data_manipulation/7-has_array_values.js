export default function hasValuesFromArray(set, array) {
    const a = new Set(array);

    const valueCheck = [...a].every(value => set.has(value));

    return valueCheck;
}