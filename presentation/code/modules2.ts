import myDefaultFunction from './myModule';
import { myFunction, myConstant } from './myModule';

// or...
import myDefaultFunction, { myFunction, myConstant } from './myModule';

// importing from 3rd party modules - notice no relative file path provided
import { bear } from 'animals';