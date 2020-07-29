import {useEffect, useState} from 'react'
import firebase from '../firebase' 

export const useNews = () => {
    const [data, setData] = useState([])

    useEffect(() => {
       const usubscribe = firebase.firestore().collection('news').onSnapshot((snapshot) => {
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

