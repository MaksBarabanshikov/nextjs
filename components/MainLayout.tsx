import React from 'react'
import PropTypes from 'prop-types'
import Link from "next/link";
import Head from "next/head";

type Props = {
    children: JSX.Element | JSX.Element[]
    title: string
}

const MainLayout: React.FC<Props> = ({children, title = 'Next App'}) => (
    <>
        <Head>
            <title>{title} | Next js</title>
            <meta name='keywords' content="next, javascript, nextjs, react"/>
            <meta name='description' content="this is next js"/>
            <meta charSet="UTF-8" />
        </Head>
        <nav>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/posts'}><a>Posts</a></Link>
        </nav>

        <main>
            {children}
        </main>
        <style jsx>
            {`
              nav {
                position: fixed;
                height: 60px;
                left: 0;
                right: 0;
                top: 0;
                background-color: darkblue;
                display: flex;
                justify-content: space-around;
                align-items: center;
              }
              nav a {
                color: #fff;
                text-decoration: none;
              }
              
              main {
              margin-top: 60px;
              padding: 1rem;
              }
            `}
        </style>
    </>
)

MainLayout.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
}

export default MainLayout