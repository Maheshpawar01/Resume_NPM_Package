#!/usr/bin/env node

const resume = require('./resume.json');

console.log('\n=== Mahesh Resume ===\n');

console.log('Brief Overview:');
resume['Brief Overview'].forEach(line => console.log(' -', line));

console.log('\nTechnical Skills:');
resume['Technical Skills'].forEach(skill => console.log(' -', skill));

console.log('\nEducation:');
resume['Education'].forEach(line => console.log(' -', line));

console.log('\nContact Details (Important!):');
resume['Contact Details (Important!)'].forEach(line => console.log(' -', line));

console.log('\nMy Social Media Presence:');
resume['My Social Media Presence'].forEach(line => console.log(' -', line));

console.log('\n========================\n');
