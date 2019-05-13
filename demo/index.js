import template from '../src/template'

const data = {
    var1: 'Fellows',
    var2: 'Lord Of Rings',
    var3: [
        { firstName: 'Frodo', lastName: 'Bargins' },
        { firstName: 'Sam', lastName: 'Gamgee' },
        { firstName: 'Peregrin', lastName: 'Took' },
    ],
}

const html = template(
    '{{var1}} of {{var2}} are:\n' +
        '{{#each(var3)}}\n' +
        '{{frstName}} {{lastName}}\n' +
        '{{/each}}',
    data
)

document.getElementById('goodnight').innerHTML = html
