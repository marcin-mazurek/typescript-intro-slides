require('normalize.css');

import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Layout,
  Fill
} from 'spectacle';

import Terminal from 'spectacle-terminal';

import styled from 'react-emotion';
const CustomList = styled(List)`
  line-height: 190%;
`;

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

const typeScriptLogo = require('../assets/typescript.svg');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Image src={typeScriptLogo} width={800} />
          <Heading size={1} fit lineHeight={2} textColor="secondary">
            Introduction for QA engineers
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            What is TypeScript?
          </Heading>
          <CustomList textColor="primary">
            <Appear><ListItem bulletStyle="arrow">TypeScript is a programming language developed by Microsoft</ListItem></Appear>
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
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
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
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <h2>Children</h2>
          <Terminal title="1. elijahm@elijahm: ~(zsh)" output={[
            "npm test",
            <div style={{ color: "#33B969"}}>TOTAL: 174 SUCCESS</div>,
            <div>
              <div>=============================== Coverage summary ===============================</div>
              <div style={{ color: "#DEC612"}}>Statements   : 51.29% ( 278/542 )</div>
              <div style={{ color: "#EE5057"}}>Branches     : 38.78% ( 95/245 )</div>
              <div style={{ color: "#EE5057"}}>Functions    : 46.21% ( 61/132 )</div>
              <div style={{ color: "#DEC612"}}>Lines        : 52.69% ( 274/520 )</div>
              <div>================================================================================</div>
            </div>]}
          />
        </Slide>
      </Deck>
    );
  }
}
