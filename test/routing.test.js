const request = require('supertest');
const app = require('../index.js')

describe('GET /user', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/schedules')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, function (err) {
                if (err) {
                    done(err)
                } else {
                    done()
                }
            })

    });
});

describe('POST /schedules', function () {

    it('responds with added schedule', function (done) {
        request(app)
            .post('/schedules')
            .send({ access_code: "123121", age: "21", agent_id: "213123", autoplay: "sdfasdasda", comments: "w12qwdqwd", completed: "", customer_first_name: "vic", customer_last_name: "vic", customer_phone: "254724333333", gender: "male", location: "langata", mpesa: "WEFQFWEFWEF", personel_first_name: "vic", personel_other_name: "vic", splash_page: "asASAas", status: "Deferred", task_id: "8092", registration: "self" })
            .set('content-type', 'application/x-www-form-urlencoded')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err) {
                if (err) {
                    done(err)
                } else {
                    done()
                }
            })


    });
});