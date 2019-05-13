/**
 *
 * @param {string} templateStr
 * @param {object| array} data
 */

import { isFunction, isObject, isString, clone } from './utils.js'
import handleError from './handleError'
import compile from './compile'

const o = {
    sTag: '{{', //开始标签
    eTag: '}}', //结束标签
    escape: true, //默认输出是否进行HTML转义
}

var functionMap = {} //内部函数对象

// 解释：对于用户输入的html等信息进行转移，安全出发
function encodeHTML(source) {
    return String(source)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\\/g, '&#92;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function template(tpl, data) {
    if (typeof tpl !== 'string') {
        return ''
    }

    var fn = compile(tpl)
    if (!isObject(data)) {
        return fn
    }

    // return fn(data)
}

export default template
