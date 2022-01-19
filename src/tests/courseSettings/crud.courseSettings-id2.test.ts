import {generate} from "../../data-generation/generator";
import {data} from "../../data-generation/data-sets/dataset-01";
import {api, getCreator} from "../../api/api";

describe('courses-crud', () => {

    const get = getCreator({headers: {
            "COURSE-ID": "2",

        }
    })

    beforeAll(async () => {
        await generate(data)
    })


    describe('get', () => {

        it('crud_coursesSettings_pagination', async () => {

            let res = await get('course-settings');
            console.log(res.data.items)
            expect(res.data.items.length).toBe(2);

            expect(res.data.items[0].id).toBe(4)


            expect(res.data.items[1].id).toBe(3)

            /*  res = await api.get('course-settings?pageSize=1&page=3');
              expect(res.data.items.length).toBe(1);
              expect(res.data.items[0].id).toBe(2);


              res = await api.get('course-settings?pageSize=1&page=4');
              expect(res.data.items.length).toBe(1);
              expect(res.data.items[0].id).toBe(1);*/


        })


    })



    describe('create', () => {
        //await api.post('users', )

    })

    describe('update', () => {


    })

})
