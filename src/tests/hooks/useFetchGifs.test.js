import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async () => {
        //Arrange
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;
        //Act
        await waitForNextUpdate({timeout:1500});
        //Assert
        expect( data ).toEqual([]);
        expect( loading ).not.toBeFalsy();
    });

    test('Debe retornar un arreglo de imgs y el loading en false', async () => {
        //Arrage
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        //Act
        await waitForNextUpdate({timeout:1500});
        const { data, loading } = result.current;
        //Assert
        expect( data.length ).toBe(10);
        expect( loading ).toBeFalsy();
    });
    
});
