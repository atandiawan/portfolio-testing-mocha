let chai = require('chai')
let expect = chai.expect
let controller = require('./controller.js')

describe('Mendapatkan hasil operational yang tepat', function(){
  it('should return the correct addition', function(done){
    expect(controller.add(3,4)).to.equal(7)
    done()
  })

  it('should return the correct result from multiplying', function(done){
    expect(controller.multiply(3,4)).to.equal(12)
    done()
  })
})
