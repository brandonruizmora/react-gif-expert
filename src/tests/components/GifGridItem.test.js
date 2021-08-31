import GifGridItem from '../../components/GifGridItem';
import { shallow } from 'enzyme';
import '../../setupTests';

describe('Pruebas en <GifGridItem />', () => {
    
    test('Debe renderizar GifGridItem correctamente', () => {
        const data = {title: 'Magos', url: 'https://gooogle.com'};
        const wrapper = shallow(<GifGridItem {...data} />);
        expect(wrapper).toMatchSnapshot();
    });
    
});
