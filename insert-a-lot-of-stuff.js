function getDocument() {
  return {
    name: 'Foo',
    age: Math.random() * 70
  };
}

db.users.ensureIndex({age: 1});
for(var i=0; i<1000000; i++) {
  db.users.insert(getDocument());
}
