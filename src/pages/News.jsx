import React from 'react'
import {Table} from '../components'
import {useNews} from '../hooks'


const News = () => {
    const news = useNews()

    return (
        <Table data={news} />
        
    )
}

export default News