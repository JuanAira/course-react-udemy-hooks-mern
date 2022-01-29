import { getGifs } from '../../helpers/getGifs';


describe('Test getGifs Fecth', () => {
    test('should get 10 items - length = 10', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    })

    test('should get 10 items - length = 0', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })
})


