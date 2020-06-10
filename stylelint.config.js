module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-sass-guidelines'],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        indentation: 4,
        'max-nesting-depth': null,
        'no-empty-source': null,
        'no-descending-specificity': null,
        'order/properties-alphabetical-order': null,
        'property-no-vendor-prefix': null,
        'selector-max-compound-selectors': null,
        'scss/at-import-partial-extension-blacklist': null,
        'value-no-vendor-prefix': null
    }
}
