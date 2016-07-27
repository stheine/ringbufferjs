# @stheine/ringbuffer.js

A ring buffer data structure for Node.js and the browser, extended with
some functions for numeric data (`sum`, `min`, `max`, `avg`).

## Reference

This module is based on
[ringbufferjs](https://www.npmjs.com/package/ringbufferjs) by
[janogonzalez](https://www.npmjs.com/~janogonzalez).

## Installation

As component for the browser:

```
$ component install stheine/ringbufferjs
```

As npm for Node.js:

```
# TODO - not on npm yet
```

## Example

```js
var RingBuffer = require('ringbufferjs');

var ring = new RingBuffer(2);

ring.enq(10);
ring.enq(5);
ring.enq(1); // 10 will be discarded
ring.size(); // 2
ring.peek(); // 5
ring.deq(); // 5
ring.size(); // 1
```

## API

### RingBuffer()

Initializes a new empty `RingBuffer` with the default capacity (50).

### RingBuffer(capacity)

Initializes a new empty `RingBuffer` with the given `capacity`.

### RingBuffer#capacity()

Returns the capacity of the ring buffer.

### RingBuffer#deq()

Dequeues the top element of the ring buffer.
Throws an `Error` when the buffer is empty.

### RingBuffer#enq(element)

Enqueues the `element` at the end of the ring buffer and returns its new size.
When the buffer is full the oldest element is discarded.

### RingBuffer#isEmpty()

Returns whether the ring buffer is empty or not.

### RingBuffer#isFull()

Returns whether the ring buffer is full or not.

### RingBuffer#peek()

Peeks at the top element of the ring buffer.
Throws an `Error` when the buffer is empty.

### RingBuffer#size()

Returns the size of the ring buffer.

### RingBuffer#dump()

Returns all elements of the queue.
Throws an `Error` when the buffer is empty.

### RingBuffer#sum()

Returns the sum of all elements of the queue.
Throws an `Error` when the buffer is empty.

### RingBuffer#min()

Returns the minimum of all elements of the queue.
Throws an `Error` when the buffer is empty.

### RingBuffer#max()

Returns the maximum of all elements of the queue.
Throws an `Error` when the buffer is empty.

### RingBuffer#avg()

Returns the average of all elements of the queue.
Throws an `Error` when the buffer is empty.

## Testing

As component in the browser, open test/test.html in your browser:

```
$ make
$ open test/test.html
```

As npm package:

```
$ npm test
```

## Licence

MIT
