function createUsableExpensiveObject() {
    // Just a stub implementation
    // Contains logic to create the object
    // Its implementation is irrelevant to the library
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({ foo: 0 | (Math.random() * 1000) });
      }, Math.random() * 3000);
    });
  }
  
  function processInputUsingInstance(instance, input) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log(instance, input);
        res();
      }, Math.random() * 3000);
    });
  }
  function ResourcePool(fn, maxInstances) {
    let maxInst = maxInstances;
    let instances = [];
    let lockedArr = new Array(maxInstances).fill();
    let que = [];
    return {
      retrieve: function () {
        return new Promise(async (res) => {
          // is any instance free
          let i = lockedArr.indexOf(0);
          if (i !== -1) {
            lockedArr[i] = 1;
            res(instances[i]);
          }
  
          // if there is space to create new instance
          if (maxInst > instances.length) {
            let inst = await fn();
            instances.push(inst);
            lockedArr[instances.length - 1] = 1;
            res(inst);
          }
  
          que.push(res);
        });
      },
      returnResource: function (instance) {
        let inx = instances.indexOf(instance);
        lockedArr[inx] = 0;
        if (que.length) {
          let cb = que.shift();
          lockedArr[inx] = 1;
          cb(instance);
        }
      }
    };
  }
  function appCode(inputs) {
    const maxInstances = 5;
    const pool = new ResourcePool(createUsableExpensiveObject, maxInstances);
  
    inputs.forEach(async (input) => {
      // either creates a new instance from the function passed, or
      // returns one previously created. always returns a promise.
      const instance = await pool.retrieve();
      await processInputUsingInstance(instance, input);
      // return the instance back to the pool so that it can be used
      // again by future calls to pool.retrieve
      pool.returnResource(instance);
    });
  
    // The pool should ensure that the creation is done only upto
    // maxInstances times.
    // If the caller has already asked for max resources without returning
    // anything, and then asks for more, retrieve should queue the request
    // and return an incomplete promise.
    // When the caller returns an instance, the queued requests should be
    // resolved.
  }
  
  export const App = () => {
    appCode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return <div>YOLO</div>;
  };
  export default App;
  