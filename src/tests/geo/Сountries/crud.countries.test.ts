import {generate} from "../../../data-generation/generator";
import {data} from "../../../data-generation/data-sets/dataset-01";
import {api, getCreator} from "../../../api/api";

describe('users-crud', () => {

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {

        const get = getCreator({headers: {
                "COURSE-ID": "1"
            }
        })

        it('crud_countries', async () => {
            let res = await get('geo/countries?page=1&pageSize=100');
            console.log(res.data)

            expect(res.data.items.length).toBe(3);
            expect(res.data.items[0].id).toBe(1);
            expect(res.data.items[0].title).toBe("Беларусь");

            expect(res.data.items[1].id).toBe(2);
            expect(res.data.items[1].title).toBe("Россия");

            expect(res.data.items[2].id).toBe(3);
            expect(res.data.items[2].title).toBe("Польша");

        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
