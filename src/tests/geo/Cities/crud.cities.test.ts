import {generate} from "../../../data-generation/generator";
import {data} from "../../../data-generation/data-sets/dataset-01";
import {api} from "../../../api/api";

describe('users-crud', () => {

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {


        it('crud_cities_pagination', async () => {
            let res = await api.get('geo/cities?page=1&pageSize=100');
            console.log(res.data)

            expect(res.data.items.length).toBe(6);
            expect(res.data.items[0].id).toBe(1);
            expect(res.data.items[0].title).toBe("Брест");

            expect(res.data.items[1].id).toBe(2);
            expect(res.data.items[1].title).toBe("Витебск");

            expect(res.data.items[2].id).toBe(3);
            expect(res.data.items[2].title).toBe("Гомель");

            expect(res.data.items[3].id).toBe(4);
            expect(res.data.items[3].title).toBe("Гродно");

            expect(res.data.items[4].id).toBe(5);
            expect(res.data.items[4].title).toBe("Минск");

            expect(res.data.items[5].id).toBe(6);
            expect(res.data.items[5].title).toBe("Могилев");

        })


    })

    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
