#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path');
const name = process.argv[2];
const dir = name ? './'+name : './tmp';
const currentDir = path.join(__dirname, '../template')

fs.copy(currentDir, dir, err => {
  if (err) return console.error(err)
  console.log('project ' + name + ' created!')
})
