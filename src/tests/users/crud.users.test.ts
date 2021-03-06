import {generate} from "../../data-generation/generator";
import {data} from "../../data-generation/data-sets/dataset-01";
import {api} from "../../api/api";

describe('users-crud', () => {

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {

        it('crud_users_pagination', async () => {
            let res = await api.get('users?pageSize=1&page=1')
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(4);

            res = await api.get('users?pageSize=1&page=2')
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(3);

            res = await api.get('users?pageSize=1&page=3');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(2);

            res = await api.get('users?pageSize=1&page=4');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(1);
        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
