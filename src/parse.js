/**
 * 解析HTML
 * @param {stirng} line
 */
function parseHTML(line) {
    line = line.replace(/('|")/g, '\\$1')
    // console.log('parseHTML:', line)
    return ';__code__ += ("' + line + '")\n'
}

/**
 * 解析JS
 * @param {string} line
 */

function parseJS(line) {
    var html
    var arr
    var modifier
    // console.log('parseJS line:', line)

    return ';' + line + '\n'
}

export default function parse(tpl, opt) {
    var code = ''
    var sTag = opt.sTag
    var eTag = opt.eTag
    var escape = opt.escape

    console.log('tpl original:\n', tpl)

    var tokens = tpl.split(sTag)

    console.log('tokens split sTag:\n', tokens)

    for (var i = 0, len = tokens.length; i < len; i++) {
        var token = tokens[i].split(eTag)
        console.log('tokens split eTag:\n', token)

        if (token.length === 1) {
            //解析纯文本
            code += parseHTML(token[0])
            console.log('tokens split eTag HTML:\n', code)
        } else {
            //解析含有JS变量
            code += parseJS(token[0], true)
            console.log('tokens split eTag JS:\n', code)

            if (token[1]) {
                code += parseHTML(token[1])
            }
        }
    }

    console.log('code:\n', code)

    return code
}
