import {useEffect, useState} from 'react'
import {projectStorage, projectFirestore, timestamp} from '../firebase' 

export const useNews = () => {
    const [data, setData] = useState([])

    useEffect(() => {
       const usubscribe = projectFirestore.collection('news').onSnapshot((snapshot) => {
            const newData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            setData(newData)
        })

        return () => usubscribe()
    }, [])

    return data
}

export const useStorage = (file) => {
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);
    const [createdAt, setCreatedAt] = useState(null);
    const [isReady, setIsReady] = useState(false)
   
    useEffect(() => {
        if (file) {
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_changed', (snap) => {
      
          }, (err) => {
            setError(err);
          }, async () => {
            const url = await storageRef.getDownloadURL();
            const time = timestamp();
            setCreatedAt(time)
            setUrl(url);
            setIsReady(true)
          });
        }
    }, [file])

    return {createdAt, url, error, isReady}
    
}
