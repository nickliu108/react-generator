#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path');
const name = process.argv[2];
const dir = name ? './'+name : './tmp';
const currentDir = path.join(__dirname, '../template')

fs.copy(currentDir, dir)
  .then(function(){
    console.log('project ' + name + ' created!');
  })
  .catch(function(err){
    console.log(err);
  })

var ignoreFile = [dir, '/.gitignore'].join('');
fs.outputFile(ignoreFile, 'node_modules')
  .then(data => {
    console.log(ignoreFile, ' is created')
  })
  .catch(err => {
    console.error(err)
  })
