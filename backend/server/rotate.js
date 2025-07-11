module.exports = {
    name: 'rotate',
    items: {
        count: null,
        lastStart: null
    },
    setRotate: function (bool) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = {
                    rotate: bool
                };

                await dbL.saveData(module.exports.name, data);
            } catch (e) {
                return reject(e);
            }

            resolve();
        });
    },
    getRotate: function () {
        return new Promise(async (resolve, reject) => {
            let bool = true;

            try {
                let loaded_data = await dbL.loadData(module.exports.name);

                if('rotate' in loaded_data) {
                    bool = loaded_data.rotate;
                }
            } catch (e) {
                return reject(e);
            }

            resolve(bool);
        });
    },
    countRotate: function () {
        rotateL.items.count = 0;

        rotateL.items.lastStart = timeNow(true);
    }
};