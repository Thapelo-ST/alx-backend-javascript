export default function cleanSet(set, startString) {
    const filterValue = Array.from(inputSet).filter(value => value.startsWith(startString));
    const resultString = filterValue.join('-');
    return resultString;
}