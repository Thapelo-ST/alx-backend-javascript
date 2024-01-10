export default function cleanSet(set, startString) {
    const filterValue = Array.from(set).filter(value => value.startsWith(startString)).map(value => value.slice(startString.length));
    const resultString = startString ? filterValue.join('-') : Array.from(set).join('-');
    return resultString;
}
