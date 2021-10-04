import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

global.Intl = require('intl');
require('intl-pluralrules');

Enzyme.configure({ adapter: new Adapter() });
