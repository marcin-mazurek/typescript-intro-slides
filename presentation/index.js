require('normalize.css');

import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading as BaseHeading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide as BaseSlide,
  Text,
  Layout,
  Fill
} from 'spectacle';

import Terminal from 'spectacle-terminal';

import styled from 'react-emotion';

const CustomList = styled(List)`
  line-height: 190%;
`;

const WideSlide = styled(BaseSlide)`
  max-height: 100%;
  max-width: 80%;
`;

const Columns = styled('div')`
  display: flex;
  justify-content: center;
`;

const Column = styled('div')`
  margin: 0 15px;
  flex: 1;
`;

const Heading = styled(BaseHeading)`
  margin-bottom: 50px;
`;

const Code = ({ lang, fileName, textSize }) => (
  <CodePane
    textSize={textSize || 30}
    lang={lang || "ts"}
    source={require(`raw-loader!./code/${fileName}`)}
    theme="okaida"
  />
);

import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const Slide = ({ theme, wide, ...props }) => {
  const baseProps = {
    transition: ['fade']
  };

  if (theme === 'primary' || theme === undefined) {
    baseProps.bgColor = 'primary';
    baseProps.textColor = 'secondary';
  } else if (theme === 'secondary') {
    baseProps.bgColor = 'secondary';
    baseProps.textColor = 'black';
  } else if (theme === 'tertiary') {
    baseProps.bgColor = 'tertiary';
    baseProps.textColor = 'primary';
  } else {
    throw new Error('Unsupported theme: ' + theme);
  }

  if (wide) {
    return <WideSlide {...baseProps} {...props} />;
  } else {
    return <BaseSlide {...baseProps} {...props} />;
  }
}

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
          <CustomList textColor="primary">
            <Appear><ListItem>TypeScript is a programming language developed by Microsoft</ListItem></Appear>
            <Appear><ListItem>TypeScript compiles to JavaScript</ListItem></Appear>
            <Appear><ListItem>TypeScript is superset of JavaScript</ListItem></Appear>
            <Appear><ListItem>You can use it outside the browser (Node.js)</ListItem></Appear>
            <Appear><ListItem>You can use any JavaScript library and tooling</ListItem></Appear>
          </CustomList>
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
          <CustomList>
            <Appear><ListItem>It brings true OOP features - static types, interfaces, generics, public/private/protected access</ListItem></Appear>
            <Appear><ListItem>But it's totally optional to use those</ListItem></Appear>
            <Appear><ListItem>It has a smart compiler that catches a lot of mistakes before you run your code</ListItem></Appear>
            <Appear><ListItem>It works out of the box</ListItem></Appear>
            <Appear><ListItem>Used by Gaming developers</ListItem></Appear>
            <Appear><ListItem>Stable, mature, the most popular typing solution for JavaScript</ListItem></Appear>
          </CustomList>
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
        <Slide theme="secondary">
          <Heading size={1} fit lineHeight={2} textColor="primary">
            Why should I care?
          </Heading>
          <Notes>
            The basic types don't change - any valid JavaScript is valid TypeScript.
            Also, TypeScript compiles to JavaScript, and it's JavaScript engine that executes your code.
            Any notion of TypeScript is removed in the runtime, and you're only left with basic JavaScript types.
          </Notes>
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} textColor="secondary">
            TypeScript types
          </Heading>
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
          <CustomList textColor="primary">
            <Appear><ListItem><strong>const</strong> - by default</ListItem></Appear>
            <Appear><ListItem><strong>let</strong> - if you need to mutate a variable</ListItem></Appear>
            <Appear><ListItem><strong>var</strong> - never</ListItem></Appear>
          </CustomList>
          <Notes>
            <ul>
              <li>What is TS and how is it different from JS?</li>
              <li>TS is superset of JS - Valid JS code is valid TS. This makes it possible to introduce TS to already existing project easily, and provides an easy learning curve</li>
              <li>Using TypeScript, you can still use any library from JavaScript eco-system, which makes it a very powerful language</li>
            </ul>
          </Notes>
        </Slide>
        <Slide wide theme="primary">
          <BaseHeading size={5} textColor="tertiary" lineHeight={2}>
            Exporting from modules
          </BaseHeading>
          <Code fileName="modules.ts" />
          <BaseHeading size={5} textColor="tertiary" lineHeight={2}>
            Importing from modules
          </BaseHeading>
          <Code fileName="modules2.ts" />
        </Slide>
        <Slide theme="secondary">
          <Terminal title="Terminal" output={[
            "git clone https://github.com/marcin-mazurek/typescript-intro-tasks.git",
            "cd typescript-intro-tasks",
            "npm install",
            ["npm test", <span>npm test <em># each time to execute tests</em></span>],
          ]} />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Task #1 - function signatures</Heading>
          <CustomList>
            <ListItem>Open <code>task-1/greet.ts</code></ListItem>
            <ListItem>Add argument and output type definition</ListItem>
            <ListItem>Open <code>task-1/greet.test.ts</code></ListItem>
            <ListItem>Try passing an incorrect type and watch the compiler error</ListItem>
            <ListItem>Write a function that adds two numbers and implement tests</ListItem>
            <ListItem>Write a function that checks if a number is even</ListItem>
          </CustomList>
          <Heading size={5} lineHeight={2}>Cheatsheet</Heading>
          <Code fileName="task-1.ts" />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3}>
            Classes
          </Heading>
          <Code fileName="classes.ts" textSize={25} />
        </Slide>
        <Slide theme="secondary">
          <Terminal title="Terminal" output={[
            "npm run enable-task-2",
          ]} />
        </Slide>
        <Slide wide theme="primary">
          <Heading size={3} lineHeight={1}>Task #2 - classes in practise</Heading>
          <Columns>
            <Column>
              <Heading size={5} lineHeight={2}>To do</Heading>
              <CustomList>
                <ListItem>Review <code>task-2/user.test.ts</code></ListItem>
                <ListItem>Make the test pass :)</ListItem>
              </CustomList>
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
            Arrow functions
          </Heading>
          <Code fileName="arrow-fns.ts" />
        </Slide>
      </Deck>
    );
  }
}
