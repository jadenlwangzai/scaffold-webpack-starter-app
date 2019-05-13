export default function handleError(e) {
    if (e) {
        return `${e}\n`
    } else {
        return '存在错误'
    }
}
