/// prettier.config.js Style Guide
module.exports = {
    tabWidth: 2,
    bracketSpacing: true,
    jsxBracketSameLine: true,     
    useTabs: false,
    arrowParens: "always",
    singleQuote: true,
    printWidth: 100,
    semi: true,
    trailingComma: "none",
    htmlWhitespaceSensitivity: "css",
    overrides: [
        {
            files: 'package*.json',
            options: {
                printWidth: 1000,
            },
        },
    ],
};


///To Format existing code run: 
///npm run format && git add . && git commit -m 'Reformat all the files'