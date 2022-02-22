import React from 'react'
//import { FeaturedProducts, Hero, Services, Contact } from './../components'
import {Contact} from "./../components/contacts/Contact"
import {Hero} from "./../components/hero/Hero"
import { Services } from '../components/services/Services'
import { FeaturedProducts } from '../components/features/FeaturedProducts'
const HomePage = () => {
  return <>
  <Hero/>
  <FeaturedProducts/>
  <Services/>
  <Contact/>

  </>
}

export default HomePage
