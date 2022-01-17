import {generate} from "../../data-generation/generator";
import {data} from "../../data-generation/data-sets/dataset-01";
import {api} from "../../api/api";

describe('roles-crud', () => {

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {

        it('crud_groups_pagination', async () => {

            let res = await api.get('groups?pageSize=1&page=1');
            console.log(res.data.items)

            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(2);
            expect(res.data.items[0].title).toBe('second-groups');

            res = await api.get('groups?pageSize=1&page=2');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(1);
            expect(res.data.items[0].title).toBe('first-groups');

        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
