const express = require('express');

// import modular routers for /notes
const notesRouter = require('./notes');

app.use('/notes', notesRouter);

// export this information to be used
module.exports = app;