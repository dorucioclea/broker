const DISABLED = 0
const WARN = 1
const ERROR = 2

module.exports = {
    extends: 'streamr-nodejs',
    env: {
        jest: true,
    },
    rules: {
        'max-len': [WARN, {
            code: 150
        }],
        radix: ['error', 'as-needed'],
        'max-classes-per-file': DISABLED,
        'promise/always-return': WARN,
        'promise/catch-or-return': WARN,
    }
}
