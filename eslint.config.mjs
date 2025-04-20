// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import 'eslint-plugin-only-warn';

export default withNuxt({
  rules: {
    'space-infix-ops':                         1,
    'no-console':                              [1, { allow: ['warn', 'error', 'info'] }],
    '@stylistic/semi':                         [1, 'always'],
    'no-undef':                                0,
    '@stylistic/key-spacing':                  [1, { align: 'value' }],
    '@stylistic/indent':                       [1, 2],
    '@stylistic/no-multi-spaces':              0,
    '@typescript-eslint/no-empty-object-type': 0,
    '@stylistic/arrow-parens':                 [1, 'always'],
    '@typescript-eslint/no-explicit-any':      0,
    'vue/html-button-has-type':                1,
    '@stylistic/member-delimiter-style':       [1, {
      multiline: {
        delimiter:   'semi',
        requireLast: true,
      },
      singleline: {
        delimiter:   'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
  },
});
