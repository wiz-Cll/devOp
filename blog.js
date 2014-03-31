var env = process.argv[3] || 'pro';

var config = {
    dev:{
        gitFoler: '/Users/chenllos/Documents/dev/blog',
        current: '/Users/chenllos/Documents/dev/LIB/Deploy/current',
        running: '/Users/chenllos/Documents/dev/LIB/Deploy/running',
        appFile: 'app.js',
        timeInterval: 30*1000
    },
    pro: {
        gitFoler: '/chenllos/blog/forward/blog',
        current: '/chenllos/blog/current',
        running: '/chenllos/blog/running',
        appFile: 'app.js',
        timeInterval: 300*1000
    }
};


module.exports = config[env];
