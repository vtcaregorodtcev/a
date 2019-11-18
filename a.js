const isNumber = value => {
    if (typeof value !== 'number') {
        return false
    }
    if (value !== Number(value)) {
        return false
    }
    if (Number.isFinite(value) === false) {
        return false
    }
    return true
};

export default function a(number = 0) {
    if (!isNumber(number)) throw new TypeError("You should give me a number!");

    return `${number}`.repeat(number).split('');
};