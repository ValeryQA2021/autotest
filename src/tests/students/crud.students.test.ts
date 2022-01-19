import {generate} from "../../data-generation/generator";
import {data} from "../../data-generation/data-sets/dataset-01";
import {api} from "../../api/api";

describe('users-crud', () => {

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {

        it('crud_users_pagination', async () => {
            let res = await api.get('students?pageSize=10&page=1&sortby=id')
            console.log(res.data.items)
            expect(res.data.items.length).toBe(4);
            expect(res.data.items[0].id).toBe(1);


            expect(res.data.items[1].id).toBe(2);


            expect(res.data.items[2].id).toBe(3);


            expect(res.data.items[3].id).toBe(4);
        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
