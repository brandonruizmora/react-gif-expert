import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en helper getGifs fetch', () => {

    test('Debe traer 10 elementos', async () => {
        const gifsArray = await getGifs('Saitama');
        expect( gifsArray.length ).toBe( 10 );
    });
    
    
});
