const jwt = require('jsonwebtoken');

try {
    let val = '"7d"';
    jwt.sign({ id: 1 }, 'secret', { expiresIn: val });
    console.log('Success for "7d"');
} catch (e) {
    console.log('Error for "7d":', e.message);
}

try {
    let val = '"60"';
    jwt.sign({ id: 1 }, 'secret', { expiresIn: val });
    console.log('Success for "60"');
} catch (e) {
    console.log('Error for "60":', e.message);
}
