const fs = require('fs');

// Create a folder named 'myFolder'
fs.mkdir('myFolder', (err) => {
  if (err) {
    console.error('Failed to create folder:', err);
  } else {
    console.log('Folder created successfully!');
  }
});

fs.mkdir('parentFolder/childFolder', { recursive: true }, (err) => {
  if (err) {
    console.error('Failed to create nested folder:', err);
  } else {
    console.log('Nested folder created!');
  }
});
