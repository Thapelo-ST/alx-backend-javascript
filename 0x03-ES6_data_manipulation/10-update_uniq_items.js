export default function updateUniqueTime(inputMap) {
    if (!(inputMap instanceof Map)) {
        throw new Error('Cannot procces');
    }

    const updatedMap = new Map();

    inputMap.forEach((quantiy, item) => {
        updatedMap.set(item,quantiy === 1 ? 100 : quantiy);
    });

    return updatedMap;
}