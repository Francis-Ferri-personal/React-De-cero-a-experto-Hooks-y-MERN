import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


// https://enzymejs.github.io/enzyme/
// https://react-hooks-testing-library.com/installation
// https://www.npmjs.com/package/enzyme-to-json