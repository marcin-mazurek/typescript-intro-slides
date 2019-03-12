require('normalize.css');

import React from 'react';
import {
  Appear,
  Deck,
  Heading as BaseHeading,
  Image,
  ListItem,
  Notes,
  Text,
} from 'spectacle';

import Terminal from 'spectacle-terminal';
import { List, Columns, Column, Heading, Code, Slide } from './custom-components';
import theme from './theme';

const typeScriptLogo = require('../assets/typescript.svg');
const goodWork = require('../assets/good-work.gif');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide theme="primary">
          <Image src={typeScriptLogo} width={800} />
          <Heading size={1} fit lineHeight={2} textColor="secondary">
            Introduction for QA engineers
          </Heading>
        </Slide>
        <Slide theme="primary" wide>
          <Heading size={3} textColor="secondary">
            A few facts about Javascript
          </Heading>
          <List>
            <Appear><ListItem>Weakly typed</ListItem></Appear>
            <Appear><ListItem>Asynchronous, uses event loop currency model</ListItem></Appear>
            <Appear><ListItem>Single-threaded by default</ListItem></Appear>
            <Appear><ListItem>Supports multiple programming paradigms - procedural, functional and object-oriented</ListItem></Appear>
            <Appear><ListItem>Works in a browser and outside of a browser (with Node.js runtime)</ListItem></Appear>
            <Appear><ListItem>Interpreted - compilation (or transpilation) is optional</ListItem></Appear>
          </List>
          <br/>
          <Appear>
            <Heading size={5} textColor="secondary">
              How the language is being developed?
            </Heading>
          </Appear>
          <List>
            <Appear><ListItem>Yearly spec updates (ECMAScript 2015, ES2016, etc.)</ListItem></Appear>
            <Appear><ListItem>No possibility to specify required version of the language</ListItem></Appear>
            <Appear><ListItem>New language features become available as vendors ship new browser versions or new Node.js runtimes</ListItem></Appear>
          </List>
          <Notes>
            <li>Transpilation = it's a process of converting a newer language version to older version</li>
            <li>Compilation (or transpilation) is optional, but essential to work with newer language features</li>
          </Notes>
        </Slide>
        <Slide theme="tertiary">
          <Heading size={3} textColor="primary">
            What is TypeScript?
          </Heading>
          <List textColor="primary">
            <Appear><ListItem>TypeScript is a programming language developed by Microsoft</ListItem></Appear>
            <Appear><ListItem>TypeScript compiles to Javascript</ListItem></Appear>
            <Appear><ListItem>TypeScript is superset of Javascript</ListItem></Appear>
            <Appear><ListItem>Works with Node.js</ListItem></Appear>
            <Appear><ListItem>You can use any Javascript library and tooling</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>What is TS and how is it different from JS?</li>
              <li>TS is superset of JS - Valid JS code is valid TS. This makes it possible to introduce TS to already existing project easily, and provides an easy learning curve</li>
              <li>Using TypeScript, you can still use any library from Javascript eco-system, which makes it a very powerful language</li>
            </ul>
          </Notes>
        </Slide>
        <Slide theme="primary">
          <Heading size={3} textColor="secondary">
            Why use TypeScript?
          </Heading>
          <List>
            <Appear><ListItem>It brings true OOP features - static types, interfaces, generics, public/private/protected access</ListItem></Appear>
            <Appear><ListItem>But it's totally optional to use those</ListItem></Appear>
            <Appear><ListItem>It has a smart compiler that catches a lot of mistakes before you run your code</ListItem></Appear>
            <Appear><ListItem>It works out of the box</ListItem></Appear>
            <Appear><ListItem>Used by Gaming developers</ListItem></Appear>
            <Appear><ListItem>Stable, mature, the most popular typing solution for Javascript</ListItem></Appear>
          </List>
          <Notes>
            <li>It provides features well-known in object oriented programming languages such as static types, interfaces, generics, annotations (which are called decorators)
              public/private/protected access and more</li>
            <li>All of that is totally optional, unless you configure the compiler otherwise. You don't have to use TS syntax at all. If you're just using TS compiler, you will benefit from autocomplete, compiler warnings and type validation against third-party libraries</li>
            <li>It has a smart compiler that infers types (meaning that often you don't have to declare types yourself) and catches a lot of mistakes before you run your code</li>
            <li>Unlike its competitors - Babel, Flow - it's opinionated and requires minimal configuration, it almost works out of the box</li>
            <li>It's used by Gaming devs</li>
            <li>Unlike Flow, it's stable, mature, and the most popular - according to number of downloads and stars on GitHub</li>
          </Notes>
        </Slide>
        <Slide theme="tertiary">
          <Heading size={3} textColor="primary">
            Ecosystem
          </Heading>
          <List textColor="primary">
            <Appear><ListItem>npm - Node.js package manager (used for front-end Javascript packages these days too)</ListItem></Appear>
            <Appear><ListItem>yarn - Facebook's alternative to npm, used by majority of Gaming projects</ListItem></Appear>
            <Appear><ListItem>npx - npm package runner, allows to run a CLI command without installing the package (eg. one-off project skeleton generation)</ListItem></Appear>
            <Appear><ListItem>Babel - most popular Javascript transpiler (not required when working with TypeScript)</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>What is TS and how is it different from JS?</li>
              <li>TS is superset of JS - Valid JS code is valid TS. This makes it possible to introduce TS to already existing project easily, and provides an easy learning curve</li>
              <li>Using TypeScript, you can still use any library from Javascript eco-system, which makes it a very powerful language</li>
            </ul>
          </Notes>
        </Slide>
        <Slide wide theme="secondary">
          <Heading size={1} textColor="primary">
            Basics of Javascript syntax
          </Heading>
        </Slide>
        <Slide theme="primary">
          <Heading size={5} textColor="secondary">Basic types</Heading>
          <Code fileName="syntax-basics-1.ts" />
        </Slide>
        <Slide theme="primary">
          <Heading size={5} textColor="secondary">Instructions</Heading>
          <Code fileName="syntax-basics-2.ts" />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={5} textColor="secondary">Working with objects - the modern way</Heading>
          <Code fileName="syntax-basics-3.ts" textSize={35} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={5} textColor="secondary">Working with objects - the old-school way</Heading>
          <Code fileName="syntax-basics-4.ts" textSize={35} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={5} textColor="secondary">Working with objects - using object literals</Heading>
          <Code fileName="syntax-basics-5.ts" textSize={35} />
        </Slide>
        <Slide theme="primary">
          <Heading size={3}>
            Javascript types
          </Heading>
          <Code fileName="types-js.ts" />
          <Notes>
            <ul>
              <li>undefined is unassigned (default empty) value</li>
              <li>null is explicitly assigned empty value</li>
            </ul>
          </Notes>
        </Slide>
        <Slide theme="primary">
          <Heading size={3} textColor="secondary">
            TypeScript types
          </Heading>
          <Notes>
            The basic types don't change - any valid Javascript is valid TypeScript.
            Also, TypeScript compiles to Javascript, and it's Javascript engine that executes your code.
            Any notion of TypeScript is removed in the runtime, and you're only left with basic Javascript types.
          </Notes>
          <Code fileName="types-ts.ts" />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} textColor="secondary">
            How to declare a variable?
          </Heading>
          <Code fileName="variables.ts" />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} textColor="secondary">
            How to declare a constant?
          </Heading>
          <Code fileName="constants.ts" />
        </Slide>
        <Slide theme="tertiary">
          <Heading size={3} textColor="primary">
            What should I use?
          </Heading>
          <List textColor="primary">
            <Appear><ListItem><strong>const</strong> - by default</ListItem></Appear>
            <Appear><ListItem><strong>let</strong> - if you need to mutate a variable</ListItem></Appear>
            <Appear><ListItem><strong>var</strong> - never</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>What is TS and how is it different from JS?</li>
              <li>TS is superset of JS - Valid JS code is valid TS. This makes it possible to introduce TS to already existing project easily, and provides an easy learning curve</li>
              <li>Using TypeScript, you can still use any library from Javascript eco-system, which makes it a very powerful language</li>
            </ul>
          </Notes>
        </Slide>
        <Slide wide theme="secondary">
          <Heading size={1} textColor="primary">
            Module management in Javascript
          </Heading>
        </Slide>
        <Slide wider theme="primary">
          <BaseHeading size={3} textColor="secondary" lineHeight={2}>
            ECMAScript 2015 style
          </BaseHeading>
          <BaseHeading size={5} textColor="secondary" lineHeight={2}>
            Exporting from modules
          </BaseHeading>
          <Code fileName="modules.ts" />
          <br />
          <BaseHeading size={5} textColor="secondary" lineHeight={2}>
            Importing from modules
          </BaseHeading>
          <Code fileName="modules2.ts" />
        </Slide>
        <Slide wider theme="primary">
          <BaseHeading size={3} textColor="secondary" lineHeight={2}>
            CommonJS (old-school) style
          </BaseHeading>
          <BaseHeading size={5} textColor="secondary" lineHeight={2}>
            Exporting from modules
          </BaseHeading>
          <Code fileName="modules4.ts" />
          <br />
          <BaseHeading size={5} textColor="secondary" lineHeight={2}>
            Importing from modules
          </BaseHeading>
          <Code fileName="modules3.ts" />
        </Slide>
        <Slide wide theme="tertiary">
          <Heading size={1} textColor="primary">
            Coding standards
          </Heading>
        </Slide>
        <Slide wide theme="secondary">
          <BaseHeading size={5} textColor="primary">
            Most popular
          </BaseHeading>
          <List textColor="primary">
            <ListItem>variables, functions, methods - <strong>camelCase</strong></ListItem>
            <ListItem>classes, interfaces, enum names and values - <strong>PascalCase</strong> (no <code>I</code> prefix or <code>Impl</code> suffix)</ListItem>
            <ListItem>declaring string content with single quotes: <pre style={{ marginTop: '10px' }}>const myString = 'abc';</pre></ListItem>
            <ListItem>using template string only when escaping or string interpolation is required: <pre style={{ marginTop: '10px' }}>{'const message = `Hello ${name}`;'}</pre></ListItem>
          </List>
          <br />
          <BaseHeading size={5} textColor="primary">
            Vary across projects
          </BaseHeading>
          <List textColor="primary">
            <ListItem>naming files - <code>kebab-case.ts</code> vs <code>camelCase.ts</code> vs <code>PascalCase.ts</code></ListItem>
            <ListItem>configuration constants - <strong>UPPERCASE_WITH_UNDERSCORES</strong> vs <strong>camelCase</strong></ListItem>
            <ListItem>whether to prefix protected and private members with an underscore</ListItem>
            <ListItem>whether to use semicolons or not (they are optional)</ListItem>
          </List>
        </Slide>
        <Slide theme="secondary" textColor="black">
          <Terminal title="Terminal" output={[
            "git clone https://github.com/marcin-mazurek/",
            "   ↪ mmazurek/typescript-intro-tasks.git",
            "cd typescript-intro-tasks",
            "npm install",
            ["npm test", <span>npm test <em># executes tests once</em></span>],
          ]} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Task #1 - function signatures</Heading>
          <List>
            <ListItem>Open <code>task-1/greet.ts</code></ListItem>
            <ListItem>Add argument and output type definition</ListItem>
            <ListItem>Open <code>task-1/greet.test.ts</code></ListItem>
            <ListItem>Try passing an incorrect type and watch the compiler error</ListItem>
            <ListItem>Write a function that adds two numbers and implement tests</ListItem>
            <ListItem>Write a function that checks if a number is even</ListItem>
          </List>
          <br/>
          <Heading size={5}>Cheatsheet</Heading>
          <Code fileName="task-1.ts" />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3}>
            TypeScript Classes
          </Heading>
          <Code fileName="classes.ts" textSize={25} />
        </Slide>
        <Slide theme="secondary" textColor="black">
          <Terminal title="Terminal" output={[
            "npm run enable-task-2",
          ]} />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Task #2 - classes in practise</Heading>
          <Columns>
            <Column>
              <Heading size={5} lineHeight={2}>To do</Heading>
              <List>
                <ListItem>Review <code>task-2/user.test.ts</code></ListItem>
                <ListItem>Make the test pass :)</ListItem>
              </List>
            </Column>
            <Column>
              <Heading size={5} lineHeight={2}>Cheatsheet</Heading>
              <Code fileName="task-2.ts" textSize={25} />
            </Column>
          </Columns>
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Task #2.1 - shorter constructor</Heading>
          <div style={{ marginBottom: '50px' }}>
            <Text>Use the automatic paramater assignment syntax:</Text>
          </div>
          <Code fileName="task-2-1.ts" />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3}>
            Interfaces and inheritance
          </Heading>
          <Code fileName="interfaces.ts" textSize={25} />
        </Slide>
        <Slide theme="tertiary">
          <Heading size={3} textColor="primary">
            OOP limitations
          </Heading>
          <List>
            <Appear><ListItem>No multi-inheritance</ListItem></Appear>
            <Appear><ListItem>No mixins support by TypeScript syntax (possible in vanilla Javascript and using decorators - annotations equivalent)</ListItem></Appear>
            <Appear><ListItem>No run-time type checks (unless an additional library is used)</ListItem></Appear>
            <Appear><ListItem>Overloading is very tricky due to no native Javascript equivalent</ListItem></Appear>
          </List>
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Task #2.2 - interfaces in practice</Heading>
          <List>
            <ListItem>Implement <code>BaseUser</code> interface with <code>name</code> and <code>age</code> properties</ListItem>
            <ListItem>Make <code>User</code> implement <code>BaseUser</code> interface</ListItem>
            <ListItem>Allow to pass <code>BaseUser</code> as a child</ListItem>
            <ListItem>
              Add another test case that will test the possibility of adding any object matching <code>BaseUser</code> interface using <em>object literal</em> syntax:
              <div style={{ marginTop: '25px' }}>
                <Code fileName="task-2-2.ts" />
              </div>
            </ListItem>
          </List>
          <Heading size={5} lineHeight={1}>Cheatsheet</Heading>
          <div style={{ marginTop: '25px' }}>
            <Code fileName="task-2-2-cheatsheet.ts" />
          </div>
        </Slide>
        <Slide wide theme="tertiary">
          <Heading size={1} textColor="primary">
            Arrow functions
          </Heading>
        </Slide>
        <Slide wider theme="primary">
          <Code fileName="arrow-fns.ts" textSize={40} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={5}>
            Returning an object
          </Heading>
          <Code fileName="arrow-fns-3a.ts" textSize={35} />
          <div style={{ marginTop: '70px' }}>
            <Heading size={5}>
              With function body
            </Heading>
          </div>
          <Code fileName="arrow-fns-3b.ts" textSize={35} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3}>
            And the same, with types
          </Heading>
          <Code fileName="arrow-fns-2.ts" />
        </Slide>
        <Slide theme="secondary" textColor="black">
          <Terminal title="Terminal" output={[
            "npm run enable-task-3",
          ]} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Task #3 - arrow function</Heading>
          <List>
            <ListItem>Implement <code>getAdultUsersModel</code> function</ListItem>
            <ListItem>Select users that are 18 years old or older</ListItem>
            <ListItem>Map the data to return <code>name</code> and <code>age</code> field only</ListItem>
            <ListItem>Unit tests will validate your solution</ListItem>
          </List>
          <br/>
          <Heading size={5}>Cheatsheet</Heading>
          <Code fileName="task-3.ts" />
        </Slide>
        <Slide wide theme="tertiary">
          <Heading size={1} textColor="primary">
            The most tricky part of Javascript - <code>this</code> keyword
          </Heading>
          <Notes>
            The most tricky part of Javascript is definitely the "this" keyword. The value of this variable is determined primarly by how a function is called, but it can be overwritten or
            may not exist - depending on a context. Let's walk through the most popular use cases.
          </Notes>
        </Slide>
        <Slide theme="primary">
          <Heading size={3} lineHeight={1}><code>this</code> in global context</Heading>
          <Code fileName="this-in-global-context.ts" />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}><code>this</code> in direct function call</Heading>
          <Code fileName="this-in-direct-fn-call.ts" />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}><code>this</code> in object literals</Heading>
          <Code fileName="this-in-object-literals.ts" />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}><code>this</code> in classes</Heading>
          <Code fileName="this-in-classes.ts" />
        </Slide>
        <Slide wide theme="tertiary">
          <Heading size={1} textColor="primary">
            How to deal with <code>this</code>? 
          </Heading>
          <Heading size={3} textColor="primary">
            Arrow functions to the rescue
          </Heading>
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3}>
            How to fix the incorrect <code>this</code> value with arrow function? - first example
          </Heading>
          <Code fileName="this-with-arrow-fns.ts" />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3}>
            How to fix the incorrect <code>this</code> value with arrow function? - second example
          </Heading>
          <Columns>
            <Column>
              <Heading size={5}>Regular functions</Heading>
              <Code fileName="this-with-arrow-fns-2-a.ts" />
            </Column>
            <Column>
              <Heading size={5}>Arrow functions</Heading>
              <Code fileName="this-with-arrow-fns-2-b.ts" />
            </Column>
          </Columns>
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}><code>this</code> in classes</Heading>
          <Code fileName="this-with-arrow-fns.ts" />
          <Notes>Arrow functions is not only about concise syntax. Additionally, they don't have their own context (this keyword), which makes them very powerful when working with callbacks.</Notes>
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}><code>this</code> modified by <code>bind</code>, <code>call</code> and <code>apply</code></Heading>
          <Code fileName="this-with-bind-call-apply.ts" />
        </Slide>
        <Slide theme="tertiary">
          <Heading size={1} textColor="primary">
            Quiz time!
          </Heading>
        </Slide>
        <Slide theme="secondary">
          <Image src={goodWork} width={900} />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Task #5.1 - handing async code with callbacks</Heading>
          <List>
            <ListItem>Get list of users from <code>https://jsonplaceholder.typicode.com/users</code> using <code>request</code></ListItem>
            <ListItem>Deserialize JSON response</ListItem>
            <ListItem>Map the results to an array of emails</ListItem>
            <ListItem>Log the result to the console</ListItem>
          </List>
          <Code fileName="async-callbacks.ts" textSize={35} />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Task #5.2 - handing async code with promises</Heading>
          <List>
            <ListItem>Get list of tasks from <code>https://jsonplaceholder.typicode.com/todos</code> using <code>Fetch API</code></ListItem>
            <ListItem>Deserialize JSON response</ListItem>
            <ListItem>Count number of completed and uncompleted tasks</ListItem>
            <ListItem>Log the result as an object literal to the console</ListItem>
            <ListItem>Catch errors and log them too (try an incorrect URL and see if the error handling works)</ListItem>
          </List>
          <Code fileName="async-promises.ts" textSize={35} />
        </Slide>
        <Slide theme="tertiary">
          <Heading size={1} textColor="primary">
            ⚠️ Remember ⚠️
          </Heading>
          <List>
            <ListItem>Callbacks are bad, and lead to "callback hell" (nested callbacks) - use libraries that support Promises, or use <code>util.promisify</code> from Node to convert to Promise-based API</ListItem>
            <ListItem><code>try/catch/finally</code> doesn't work with callbacks and promises</ListItem>
            <ListItem>Unhandled promise rejections will kill the Node.js process</ListItem>
          </List>
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Task #5.3 - handing async code with async/await keywords</Heading>
          <List>
            <ListItem>Adapt your solution from task #5.2 to use async/await keywords</ListItem>
            <ListItem>Now, you can write your code as if it was synchronous, and use try/catch/finally</ListItem>
          </List>
          <Code fileName="async-async-await.ts" textSize={35} />
        </Slide>
        <Slide wider theme="secondary">
          <Heading size={1} lineHeight={1} textColor="primary">More advanced syntax</Heading>
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Default parameters</Heading>
          <Code fileName="default-params.ts" textSize={35} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Spread operator - arrays</Heading>
          <Code fileName="spread.ts" textSize={35} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Spread operator - objects</Heading>
          <Code fileName="spread2.ts" textSize={35} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Spread operator - function arguments</Heading>
          <Code fileName="spread3.ts" textSize={35} />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Rest parameters</Heading>
          <Code fileName="rest-params.ts" textSize={35} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Destructuring</Heading>
          <Code fileName="destructuring.ts" textSize={35} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={3} lineHeight={1}>Decorators</Heading>
          <Code fileName="decorators.ts" textSize={35} />
        </Slide>
        <Slide theme="tertiary">
          <Heading size={1} lineHeight={1} textColor="primary">Task #6 - hands-on WebDriverIO</Heading>
        </Slide>
        <Slide theme="secondary" textColor="black">
          <Terminal title="Terminal" output={[
            "git clone https://github.com/marcin-mazurek/",
            "   ↪ typescript-wdio-boilerplate.git",
            "cd typescript-wdio-boilerplate",
            "npm install",
            "npm test"
          ]} />
        </Slide>
        <Slide wider theme="primary">
          <Heading size={2} lineHeight={1}>Recommended resources</Heading>
          <List>
            <ListItem><a href="https://javascript.info/">https://javascript.info/</a> - The Modern Javascript Tutorial</ListItem>
            <ListItem><a href="https://www.typescriptlang.org/docs/">https://www.typescriptlang.org/docs/</a> - official TypeScript documentation</ListItem>
            <ListItem><a href="https://basarat.gitbooks.io/typescript/">https://basarat.gitbooks.io/typescript/</a> - TypeScript Deep Dive</ListItem>
          </List>
        </Slide>
        <Slide wider theme="secondary">
          <Heading size={1} lineHeight={1} textColor="primary">Thank you!</Heading>
        </Slide>
      </Deck>
    );
  }
}
