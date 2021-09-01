import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    test('Debe de mostar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const category = 'Goku';
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        //Arrange
        const category = 'Goku';

        const gifs = [{
            id: '123',
            url: 'https://google/algo/pixel.jpg',
            title: 'Pixel'
        }, {
            id: '321',
            url: 'https://google/algo/pixel.jpg',
            title: 'Pixel'
        }];

        //Act
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);

        //Assert
        expect( wrapper.find('p').exists() ).toBe(false); //se espera que se quite el parrafo debido a que el loading esta en false
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length ); //se espera que el componente GifGridItem sea la misma cantidad que el array de los gifs


    });
    

});
