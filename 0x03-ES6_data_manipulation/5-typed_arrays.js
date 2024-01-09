export default function createInt8TypedArray(length, position, value) {
    if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
        throw new Error("All parameters must be numbers");
    }

    if (position >= length || position < 0) {
        throw new Error("Position outside range");
    }

    let typedArray = new Int8Array(length);

    typedArray[position] = value;

    return typedArray;

}