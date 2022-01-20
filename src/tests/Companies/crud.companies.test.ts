import {generate} from "../../data-generation/generator";
import {data} from "../../data-generation/data-sets/dataset-01";
import {api} from "../../api/api";

describe('crud_companies', () => {

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {


        it('crud_companies', async () => {
            let res = await api.get('companies');
            console.log(res.data)

            expect(res.data.items.length).toBe(2);
            expect(res.data.items[0].id).toBe(1);
            expect(res.data.items[0].title).toBe("KYZIN");

            expect(res.data.items[0].id).toBe(2);
            expect(res.data.items[0].title).toBe("BYZIN");

            /*expect(res.data.items[1].id).toBe(2);
            expect(res.data.items[1].title).toBe("Россия");

            expect(res.data.items[2].id).toBe(3);
            expect(res.data.items[2].title).toBe("Польша");*/

        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
