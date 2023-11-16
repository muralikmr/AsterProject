import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <>
    <footer>
    <main className="footer-main1">
       <HashLink to="/#home"><h1>Hotel taj</h1></HashLink>
        <p>Place of home food</p>
    </main>
    <main className="footer-main2">
        <h2>Social Media</h2>
        <a href="https://www.instagram.com/codingshark../">Instagram</a>
        <a href="https://www.linkedIN.com">linkedIn</a>
        <a href="https://www.twitter.com">Twitter</a>
    </main>
    </footer>
    </>
  )
}

export default Footer