export const toString = {}.toString
export const slice = [].slice
export function checkType(x) {
    if (x === null) {
        return 'null'
    }

    const t = typeof x

    if (t !== 'object') {
        return t
    }

    const c = toString
        .call(x)
        .slice(8, -1)
        .toLowerCase()
    if (c !== 'object') {
        return c
    }

    if (x.constructor === Object) {
        return c
    }

    return 'unknown'
}

export function isObject(obj) {
    return checkType(obj) === 'object'
}
export function isFunction(fn) {
    return checkType(fn) === 'function'
}
export function isString(str) {
    return checkType(str) === 'string'
}
export function extend() {
    const target = arguments[0] || {}
    const arrs = slice.call(arguments, 1)
    const len = arrs.length

    for (let i = 0; i < len; i++) {
        let arr = arrs[i]
        for (let name in arr) {
            target[name] = arr[name]
        }
    }
    return target
}
export function clone() {
    const args = slice.call(arguments)
    return extend.apply(null, [{}].concat(args))
}
