import Head from 'next/head'
import Image from 'next/image'
import About from '../sections/About'
import Header from '../sections/Header'
import Nav from '../sections/Nav'
import Skill from '../sections/Skill'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Skill/>
    </>
  )
}
