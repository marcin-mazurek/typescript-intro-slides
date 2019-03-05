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
        <Slide theme="tertiary">
          <Heading size={3} textColor="primary">
            What is TypeScript?
          </Heading>
          <List textColor="primary">
            <Appear><ListItem>TypeScript is a programming language developed by Microsoft</ListItem></Appear>
            <Appear><ListItem>TypeScript compiles to JavaScript</ListItem></Appear>
            <Appear><ListItem>TypeScript is superset of JavaScript</ListItem></Appear>
            <Appear><ListItem>You can use it outside the browser (Node.js)</ListItem></Appear>
            <Appear><ListItem>You can use any JavaScript library and tooling</ListItem></Appear>
          </List>
          <Notes>
            <ul>
              <li>What is TS and how is it different from JS?</li>
              <li>TS is superset of JS - Valid JS code is valid TS. This makes it possible to introduce TS to already existing project easily, and provides an easy learning curve</li>
              <li>Using TypeScript, you can still use any library from JavaScript eco-system, which makes it a very powerful language</li>
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
            <Appear><ListItem>Stable, mature, the most popular typing solution for JavaScript</ListItem></Appear>
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
        <Slide wide theme="secondary">
          <Heading size={1} textColor="primary">
            But... before we delve into TypeScript...
          </Heading>
        </Slide>
        <Slide wide theme="tertiary">
          <Heading size={1} textColor="primary">
            Basics of JavaScript syntax
          </Heading>
        </Slide>
        <Slide theme="primary">
          <Code fileName="syntax-basics-1.ts" />
        </Slide>
        <Slide theme="primary">
          <Code fileName="syntax-basics-2.ts" />
        </Slide>
        <Slide theme="primary">
          <Code fileName="syntax-basics-3.ts" />
        </Slide>
        <Slide theme="primary">
          <Heading size={3}>
            JavaScript types
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
            The basic types don't change - any valid JavaScript is valid TypeScript.
            Also, TypeScript compiles to JavaScript, and it's JavaScript engine that executes your code.
            Any notion of TypeScript is removed in the runtime, and you're only left with basic JavaScript types.
          </Notes>
          <Code fileName="types-ts.ts" />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} textColor="secondary">
            How to declare a variable?
          </Heading>
          <Code fileName="variables.ts" />
        </Slide>
        <Slide wide theme="primary">
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
              <li>Using TypeScript, you can still use any library from JavaScript eco-system, which makes it a very powerful language</li>
            </ul>
          </Notes>
        </Slide>
        <Slide wide theme="primary">
          <BaseHeading size={5} textColor="secondary" lineHeight={2}>
            Exporting from modules
          </BaseHeading>
          <Code fileName="modules.ts" />
          <BaseHeading size={5} textColor="secondary" lineHeight={2}>
            Importing from modules
          </BaseHeading>
          <Code fileName="modules2.ts" />
        </Slide>
        <Slide wide theme="secondary">
          <Heading size={3} textColor="primary">
            Coding standards
          </Heading>
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
            <ListItem>whether to prefix protected and private members with an underscore</ListItem>
            <ListItem>configuration constants - <strong>UPPERCASE_WITH_UNDERSCORES</strong> vs <strong>camelCase</strong></ListItem>
          </List>
        </Slide>
        <Slide theme="secondary" textColor="black">
          <Terminal title="Terminal" output={[
            "git clone https://git.nonprod.williamhill.plc/",
            "   ↪ mmazurek/TypeScript-Intro-Slides.git",
            "cd typescript-intro-tasks",
            "npm install",
            ["npm test", <span>npm test <em># executes tests once</em></span>],
          ]} />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Task #1 - function signatures</Heading>
          <List>
            <ListItem>Open <code>task-1/greet.ts</code></ListItem>
            <ListItem>Add argument and output type definition</ListItem>
            <ListItem>Open <code>task-1/greet.test.ts</code></ListItem>
            <ListItem>Try passing an incorrect type and watch the compiler error</ListItem>
            <ListItem>Write a function that adds two numbers and implement tests</ListItem>
            <ListItem>Write a function that checks if a number is even</ListItem>
          </List>
          <Heading size={5} lineHeight={2}>Cheatsheet</Heading>
          <Code fileName="task-1.ts" />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3}>
            Classes
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
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Task #2.1 - shorter constructor</Heading>
          <div style={{ marginBottom: '50px' }}>
            <Text>Use the automatic paramater assignment syntax:</Text>
          </div>
          <Code fileName="task-2-1.ts" />
        </Slide>
        <Slide wide theme="primary">
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
            <Appear><ListItem>No mixins support by TypeScript syntax (possible in vanilla JavaScript and using decorators - annotations equivalent)</ListItem></Appear>
            <Appear><ListItem>No run-time type checks (unless an additional library is used)</ListItem></Appear>
            <Appear><ListItem>Overloading is very tricky due to no native JavaScript equivalent</ListItem></Appear>
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
        <Slide wide theme="primary">
          <Code fileName="arrow-fns.ts" textSize={40} />
        </Slide>
        <Slide wide theme="primary">
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
        <Slide wide theme="primary">
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
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Task #3 - arrow function</Heading>
          <List>
            <ListItem>Implement <code>getAdultUsersModel</code> function</ListItem>
            <ListItem>Select users that are 18 years old or older</ListItem>
            <ListItem>Map the data to return <code>name</code> and <code>age</code> field only</ListItem>
            <ListItem>Unit tests will validate your solution</ListItem>
          </List>
          <Heading size={5}>Cheatsheet</Heading>
          <Code fileName="task-3.ts" />
        </Slide>
        <Slide wide theme="tertiary">
          <Heading size={1} textColor="primary">
            The most tricky part of JavaScript - <code>this</code> keyword
          </Heading>
          <Notes>
            The most tricky part of JavaScript is definitely the "this" keyword. The value of this variable is determined primarly by how a function is called, but it can be overwritten or
            may not exist - depending on a context. Let's walk through the most popular use cases.
          </Notes>
        </Slide>
        <Slide theme="primary">
          <Heading size={3} lineHeight={1}><code>this</code> in global context</Heading>
          <Code fileName="this-in-global-context.ts" />
        </Slide>
        <Slide theme="primary">
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
      </Deck>
    );
  }
}
