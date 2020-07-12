import React from 'react'
import Blog from './Blog'

const Home = () => {
    return <div>
        <Blog
            tanggal="02 juni 2020"
            judul="Teknologi Blockhain "
            summary="There are many variations of passages of Lorem Ipsum available."/>

        <Blog
            tanggal="03 juni 2020"
            judul="Teknologi Internet of things "
            summary="There are many variations of passages of Lorem Ipsum available."/>
        
        <Blog
            tanggal="04 juni 2020"
            judul="Teknologi 5.0 "
            summary="There are many variations of passages of Lorem Ipsum available."/>
    </div>
}

export default Home;