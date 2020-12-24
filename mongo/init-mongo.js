print('Start #################################################################');

print('db mediator');

db = db.getSiblingDB('mediator');

db.createUser({
    user : 'mediator',
    pwd  : 'h&4B5=FgvV;D]hyj',
    roles: [
        {
            role: 'readWrite',
            db  : 'mediator'
        }
    ]
});

print('db backoffice - use it for BO');

db = db.getSiblingDB('backoffice');
db.createUser({
        user : 'backoffice',
        pwd  : 'sGq%`6U+k?+-2)K~',
        roles: [
            {
                role: 'readWrite',
                db  : 'backoffice'
            }
        ]
});

db.createCollection('stations');
db.createCollection('locations');

print('END #################################################################');
