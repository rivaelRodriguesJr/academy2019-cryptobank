const firebase = require('firebase')

const create_NewUser = (record) => {
    return firebase.firestore().collection('Users').add(record)
}
 
const read_Students = () => {
    return this.firestore.collection('Students').snapshotChanges()
}
 
const update_Student = (recordID,record) => {
    this.firestore.doc('Students/' + recordID).update(record)
}
 
const delete_Student = (record_id) => {
   this.firestore.doc('Students/' + record_id).delete()
}

module.exports = { create_NewUser }
