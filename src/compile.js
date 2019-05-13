import handleError from './handleError'
import parse from './parse'
import { clone } from './utils.js'

const o = {
    sTag: '{{', //开始标签
    eTag: '}}', //结束标签
    escape: true, //默认输出是否进行HTML转义
}

function compiler(tpl, opt) {
    var mainCode = parse(tpl, opt)
    console.log(mainCode)
    return mainCode
}

export default function compile(tpl, opt) {
    opt = clone(o, opt)
    let render
    try {
        render = compiler(tpl, opt)
    } catch (e) {
        return handleError('编译错误')
    }

    return render
}
