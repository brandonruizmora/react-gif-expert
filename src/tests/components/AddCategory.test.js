import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const inputBefore = wrapper.find('input');
        const event = { target: { value: 'Hola mundo'} };
        inputBefore.simulate('change', event);
        // console.log(inputBefore.html())
        const inputAfter = wrapper.find('input');
        // console.log(inputAfter.html())
        expect(inputAfter.prop('value')).toBe('Hola mundo');
    });

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        //Arrange
        const value = 'Goku';
        const event = { target: { value } };
        const eventSubmit = { preventDefault() { } };
        //Act
        wrapper.find('input').simulate('change', event );
        wrapper.find('form').simulate('submit', eventSubmit );
        //Assert
        expect( setCategories ).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    




});
