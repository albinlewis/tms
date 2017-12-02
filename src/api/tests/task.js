const http = require('chai-http');
const chai = require('chai');
const server = require('../../server');

chai.use(http);
const should = chai.should();

describe('Task', () => {

    let id;

    describe('POST /api/tasks/create', () => {
        it('should create a new Task', (done) => {
            let newTask = {}
            chai.request(server)
                .post('/api/tasks/create')
                .send(newTask)
                .end((err, res) => {
                    res.should.have.status(200);
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

    describe('GET /api/tasks/find/' + id, () => {
        it('should find the created Task', (done) => {
            chai.request(server)
                .get('/api/tasks/find/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('PUT /api/tasks/update/' + id, () => {
        it('should update the created Task', (done) => {
            chai.request(server)
                .put('/api/tasks/update/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('DELETE /api/tasks/delete/' + id, () => {
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
