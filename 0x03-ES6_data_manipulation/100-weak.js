const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 1);
    } else {
        const count = weakMap.get(endpoint);
        weakMap.set(endpoint, count + 1);

        if (count + 1 >= 5) {
            throw new Error(`Endpoint load is high`);
        }
    }
    console.log('${endpont.id}');
}