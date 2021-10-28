const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const ExpensesModel = require("../src/model/expenses.model");
const server = require('../src/server');

// describe() - Test Suite
// it() - Test Spies

chai.use(chaiHttp);

describe("Expenses", () => {

    beforeEach(async ()=>{
        await ExpensesModel.deleteMany()
    })
  
    it("/GET - should fetch all expenses", (done) =>{
        chai.request(server)
            .get('/expenses')
            .end((err, response)=>{
                chai.expect(response.status).to.be.eql(200)
                chai.expect(response.body).to.be.an("array")
                chai.expect(response.body.length).to.be.eql(0)
                done()
            })
    })
    
    it("/POST should create one expense", done => {
        const expense = new ExpensesModel({title : 'New Expenses', amount : 12})
        chai.request(server)
            .post('/expenses')
            .send(expense)
            .end((err, resp)=>{
                chai.expect(resp.status).to.be.eql(200)
                chai.expect(resp.body.title).to.be.eql(expense.title)
                chai.expect(resp.body._id).not.to.be.undefined
                done()
            })
    })

    it("/GET Should access only one item", done => {
        const expense = new ExpensesModel({title : 'New Expenses', amount : 12})
        expense.save((err, resp) => {
            chai.request(server)
                .get("/expenses/"+ expense._id)
                .end((err, resp)=>{
                    chai.expect(resp.status).to.be.eql(200)
                    chai.expect(resp.body.title).to.be.eql('New Expenses')
                    chai.expect(resp.body.amount).to.be.eql(12)
                    chai.expect(resp.body._id).not.to.be.undefined
                    done()
                })
        })
    })

})