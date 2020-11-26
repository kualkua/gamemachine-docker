print('Start #################################################################');

db = db.getSiblingDB('gamembo');

db.createUser({
        user : 'foo',
        pwd  : 'foo',
        roles: [
            {
                role: 'readWrite',
                db  : 'gamembo'
            }
        ]
});

db.createCollection('stations');
db.createCollection('locations');

print('END #################################################################');