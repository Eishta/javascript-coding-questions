//Middleware is the programming pattern of providing hooks with a resume callback.
//TODO
// constructor
var Middleware = function () {
    this.cbs = [];
    this.use = (cb) => {
        this.cbs.push(cb);
        return null;
    };
    this.go = (cb) => {
        return null;
    };
};

// usage
var middleware = new Middleware();

middleware.use(function (next) {
    var self = this;
    setTimeout(function () {
        self.hook1 = true;
        next();
    }, 10);
});

middleware.use(function (next) {
    var self = this;
    setTimeout(function () {
        self.hook2 = true;
        next();
    }, 10);
});

var start = new Date();
middleware.go(function () {
    console.log(this.hook1); // true
    console.log(this.hook2); // true
    console.log(new Date() - start); // around 20
});
