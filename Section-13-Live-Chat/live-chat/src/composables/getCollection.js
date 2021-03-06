import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createAt')

    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createAt && results.push({ ...doc.data(), id: doc.id }) //createAt && added to not use local version of snap, so this is waiting the timestamp from the server
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub())
    })

    return { documents, error }
}

export default getCollection