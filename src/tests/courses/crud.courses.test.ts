import {generate} from "../../data-generation/generator";
import {data} from "../../data-generation/data-sets/dataset-01";
import {api} from "../../api/api";

describe('courses-crud', () => {

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {

        it('should be get courses', async () => {
            let res = await api.get('courses?pageSize=1&page=1');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(1);
            expect(res.data.items[0].title).toBe('front-end');

            res = await api.get('courses?pageSize=1&page=2');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(2);
            expect(res.data.items[0].title).toBe('back-end');

            res = await api.get('courses?pageSize=1&page=3');
            expect(res.data.items.length).toBe(1);
            expect(res.data.items[0].id).toBe(3);
            expect(res.data.items[0].title).toBe('QA');
        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
