import {generate} from "../../data-generation/generator";
import {data} from "../../data-generation/data-sets/dataset-01";
import {api} from "../../api/api";

describe('courses-crud', () => {

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {

        it('crud_accounts', async () => {

            let res = await api.get('users');
            console.log(res.data.items)

            expect(res.data.items.length).toBe(2);
            expect(res.data.items[0].id).toBe(2);
            expect(res.data.items[0].login).toBe('Serega_dev');

            expect(res.data.items[1].id).toBe(1);
            expect(res.data.items[1].login).toBe('Valera_QA');



            /* res = await api.get('accounts?pageSize=1&page=3');
             expect(res.data.items.length).toBe(1);
             expect(res.data.items[0].id).toBe(3);
             expect(res.data.items[0].login).toBe('Danya_front');

             res = await api.get('accounts?pageSize=1&page=4');
             expect(res.data.items.length).toBe(1);
             expect(res.data.items[0].id).toBe(4);
             expect(res.data.items[0].login).toBe('Kirill_UI_UX');*/
        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
