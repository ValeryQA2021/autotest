import {generate} from "../../data-generation/generator";
import {data} from "../../data-generation/data-sets/dataset-01";
import {api, getCreator} from "../../api/api";

describe('users-crud', () => {

    const get = getCreator({headers: {
            "COURSE-ID": "1",

        }
    })

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {

        it('crud_users_pagination', async () => {
            let res = await get('groups?pageSize=1&page=1');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(1);

            res = await get('groups?pageSize=1&page=2');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(2);
        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
