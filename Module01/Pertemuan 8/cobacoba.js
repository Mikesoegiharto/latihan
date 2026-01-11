const tryThrow = () => {
    try {
        let isFalse = false;
        if (isFalse) {
            throw 'there is an error';
        }
        console.log('success');
    } catch (err) {
        console.log(err);
    }
};

tryThrow();