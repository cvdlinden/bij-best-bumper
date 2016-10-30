"use strict";

var gulp = require("gulp");

// Dev task
gulp.task("dev", function(){
    // ..
})

// Serve task
gulp.task("serve", [ "connect:dev", "watch" ]);

// Serve task
gulp.task("serve", [ "connect:dev", "watch" ]);

// Connect Dev task
gulp.task("connect:dev", function(){
});

// Watch task
gulp.task("watch", function(){});

// Default
gulp.task("default", [ "dev", "serve" ]);
