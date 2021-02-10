module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/Component.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styled.js',
        templateFile: 'templates/styled.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.jsx',
        templateFile: 'templates/stories.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.test.jsx',
        templateFile: 'templates/index.test.jsx.hbs'
      }
    ]
  })
}
