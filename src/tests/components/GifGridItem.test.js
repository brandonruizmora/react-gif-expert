import GifGridItem from '../../components/GifGridItem';
import { shallow } from 'enzyme';
import '../../setupTests';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Magos';
    const url = 'https://gooogle.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe renderizar GifGridItem correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el texto en el parrafo', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(title);
    });

    test('Debe tener url y alt igual al de los props', () => {
        const img = wrapper.find('img'); 
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener clases de animacion', () => {
        const div = wrapper.find('div'); 
        const className = div.prop('className');
        expect(className.includes('animate__jackInTheBox')).toBe(true);
        // expect(div.prop('className')).toBe('card animate__animated animate__jackInTheBox');
    }); 
    
});
