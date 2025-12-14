import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import unicornPlugin from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  perfectionistPlugin.configs['recommended-natural'],
  unicornPlugin.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'react/display-name': 'off',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        { children: 'never', propElementValues: 'always', props: 'always' },
      ],
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            e: {
              event: false,
            },
            env: {
              environment: false,
            },
            props: {
              properties: false,
            },
            ref: {
              reference: false,
            },
          },
        },
      ],
    },
  },
  {
    ignores: ['.next/', 'node_modules/', 'out/'],
  }
)
