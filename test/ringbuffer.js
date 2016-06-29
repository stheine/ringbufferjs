describe('RingBuffer()', function() {
  it('returns an new RingBuffer', function() {
    expect(new RingBuffer()).to.be.a(RingBuffer);
  });

  it('accepts an initial capacity', function() {
    expect(new RingBuffer(2)).to.be.a(RingBuffer);
  });

  describe('#capacity()', function() {
    it('returns the capacity of the ring buffer', function() {
      var buffer = new RingBuffer(2);
      expect(buffer.capacity()).to.be(2);
    });
  });

  describe('#isEmpty()', function() {
    it('returns true when the ring buffer is empty', function() {
      var buffer = new RingBuffer();
      expect(buffer.isEmpty()).to.be(true);
    });

    it('returns false when the ring buffer is not empty', function() {
      var buffer = new RingBuffer();
      buffer.enq('jano');
      expect(buffer.isEmpty()).to.be(false);
    });
  });

  describe('#isFull()', function() {
    it('returns false when the ring buffer is not full', function() {
      var buffer = new RingBuffer(1);
      expect(buffer.isFull()).to.be(false);
    });

    it('returns true when the ring buffer is full', function() {
      var buffer = new RingBuffer(1);
      buffer.enq('jano');
      expect(buffer.isFull()).to.be(true);
    });
  });

  describe('#peek()', function() {
    it('fails when the ring buffer is empty', function() {
      var buffer = new RingBuffer();
      expect(function() {
        buffer.peek();
      }).to.throwException('RingBuffer is empty');
    });

    it('returns the top element of the ring buffer', function() {
      var buffer = new RingBuffer();
      buffer.enq('jano');
      buffer.enq('valentina');
      expect(buffer.peek()).to.be('jano');
    });
  });

  describe('#deq()', function() {
    it('fails when the ring buffer is empty', function() {
      var buffer = new RingBuffer();
      expect(function() {
        buffer.deq();
      }).to.throwException('RingBuffer is empty');
    });

    it('dequeues the top element of the ring buffer', function() {
      var buffer = new RingBuffer();
      buffer.enq('jano');
      buffer.enq('valentina');
      expect(buffer.deq()).to.be('jano');
      expect(buffer.size()).to.be(1);
    });
  });

  describe('#enq()', function() {
    context('when the buffer is not full', function() {
      it('enqueues an element at the end of the ring buffer', function() {
        var buffer = new RingBuffer();
        buffer.enq('jano');
        buffer.enq('valentina');
        expect(buffer.peek()).to.be('jano');
        expect(buffer.size()).to.be(2);
      });

      it('returns the new size of the ring buffer', function() {
        var buffer = new RingBuffer();
        expect(buffer.enq('jano')).to.be(1);
      });
    });

    context('when the buffer is full', function() {
      it('overwrites the oldest element', function() {
        var buffer = new RingBuffer(2);
        buffer.enq('jano');
        buffer.enq('valentina');
        buffer.enq('fran');
        expect(buffer.peek()).to.be('valentina');
      });

      it('returns the new size of the ring buffer', function() {
        var buffer = new RingBuffer(2);
        expect(buffer.enq('jano')).to.be(1);
        expect(buffer.enq('valentina')).to.be(2);
        expect(buffer.enq('fran')).to.be(2);
      });
    });
  });

  describe('#size()', function() {
    it('returns 0 when the ring buffer is empty', function() {
      var buffer = new RingBuffer();
      expect(buffer.size()).to.be(0);
    });

    it('returns the size of the ring buffer', function() {
      var buffer = new RingBuffer();
      buffer.enq('jano');
      buffer.enq('valentina');
      expect(buffer.size()).to.be(2);
    });
  });

  describe('#dump()', function() {
    it('fails when the ring buffer is empty', function() {
      var buffer = new RingBuffer();
      expect(function() {
        buffer.dump();
      }).to.throwException('RingBuffer is empty');
    });

    it('dumps the content of the ring buffer', function() {
      var buffer = new RingBuffer(2);
      buffer.enq(1);
      buffer.enq(2);
      buffer.enq(3);
      expect(buffer.dump()).to.eql([3, 2]);
    });
  });

  describe('#sum()', function() {
    it('fails when the ring buffer is empty', function() {
      var buffer = new RingBuffer();
      expect(function() {
        buffer.sum();
      }).to.throwException('RingBuffer is empty');
    });

    it('returns the sum of all elements of the ring buffer', function() {
      var buffer = new RingBuffer(3);
      buffer.enq(1);
      buffer.enq(2);
      buffer.enq(3);
      expect(buffer.sum()).to.be(6);
    });
  });

  describe('#min()', function() {
    it('fails when the ring buffer is empty', function() {
      var buffer = new RingBuffer();
      expect(function() {
        buffer.min();
      }).to.throwException('RingBuffer is empty');
    });

    it('returns the minimum of all elements of the ring buffer', function() {
      var buffer = new RingBuffer(4);
      buffer.enq(4);
      buffer.enq(2);
      buffer.enq(10);
      buffer.enq(3);
      expect(buffer.min()).to.be(2);
    });
  });

  describe('#max()', function() {
    it('fails when the ring buffer is empty', function() {
      var buffer = new RingBuffer();
      expect(function() {
        buffer.max();
      }).to.throwException('RingBuffer is empty');
    });

    it('returns the maximum of all elements of the ring buffer', function() {
      var buffer = new RingBuffer(4);
      buffer.enq(4);
      buffer.enq(2);
      buffer.enq(10);
      buffer.enq(3);
      expect(buffer.max()).to.be(10);
    });
  });

  describe('#avg()', function() {
    it('fails when the ring buffer is empty', function() {
      var buffer = new RingBuffer();
      expect(function() {
        buffer.avg();
      }).to.throwException('RingBuffer is empty');
    });

    it('returns the average of all elements of the ring buffer', function() {
      var buffer = new RingBuffer(4);
      buffer.enq(7);
      buffer.enq(2);
      buffer.enq(10);
      buffer.enq(3);
      expect(buffer.avg()).to.be(5.5);
    });
  });
});
