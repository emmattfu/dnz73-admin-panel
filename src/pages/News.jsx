import React, {useState, useEffect} from 'react'
import {Table} from '../components'

import firebase from '../firebase' 

const useNews = () => {
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

const News = () => {
    const news = useNews()

    return (
        <Table data={news} />
    )
}

export default News