import globals from "globals";
import js from "@eslint/js";
import stylisticjs from '@stylistic/eslint-plugin'
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";

export default [
  js.configs.recommended,
  { files: ["**/*.js"], 
    plugins: {
      '@stylistic/js': stylisticjs,
    }, 
    rules: { 
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'off'
    }, 
    // extends: ["js/recommended"], 
    languageOptions: { 
      globals: {...globals.node },
      sourceType: "commonjs",
      ecmaVersion: "latest",
    } 
  },
  {
    ignores: ['dist/**'],
  }
  // pluginReact.configs.flat.recommended,
];
