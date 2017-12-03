const server = require('../../server');
const http = require('chai-http');
const chai = require('chai');

chai.use(http);
const should = chai.should();

describe('Task', () => {

    let id;

    describe('POST /api/tasks/create', () => {
        it('should create a new Task', (done) => {
            let newTask = {
                title: "Creation Test",
                interval: {
                    hasInterval: true, 
                    value: 24, 
                    unit: "hour"
                }
            };
            chai.request(server)
                .post('/api/tasks/create')
                .send(newTask)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    // check if title gets set
                    res.body.should.have.property('title');
                    res.body.title.should.equal('Creation Test');
                    // check if interval gets set
                    res.body.should.have.property('interval');
                    res.body.interval.hasInterval.should.equal(true);
                    res.body.interval.value.should.equal(24);
                    res.body.interval.unit.should.equal('hour');
                    // check if omitted defaults are set
                    res.body.should.have.property('createdAt');
                    res.body.should.have.property('updatedAt');
                    res.body.should.have.property('visible');
                    res.body.should.have.property('active');
                    res.body.should.have.property('done');
                    res.body.should.have.property('time');
                    res.body.visible.should.equal(true);
                    res.body.active.should.equal(false);
                    res.body.done.should.equal(false);
                    res.body.time.should.equal(0);
                    // keep the _id for following tests
                    id = res.body._id;
                });
            let fail = {
                time: 100, 
                done: true
            };
            chai.request(server)
                .post('/api/tasks/create')
                .send(fail)
                .end((err, res) => {
                    // title is ommitted, request should fail to create
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('GET /api/tasks/find/all', () => {
        it('should find all Tasks', (done) => {
            chai.request(server)
                .get('/api/tasks/find/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('GET /api/tasks/find/:ID', () => {
        it('should find the created Task', (done) => {
            chai.request(server)
                .get('/api/tasks/find/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('PUT /api/tasks/update/:ID', () => {
        it('should update the created Task', (done) => {
            chai.request(server)
                .put('/api/tasks/update/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('DELETE /api/tasks/delete/:ID', () => {
        it('should delete the created Task', (done) => {
            chai.request(server)
                .del('/api/tasks/delete/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});
