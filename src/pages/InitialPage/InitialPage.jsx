import React from 'react'
import Button from '../../components/Button'
import Layout from '../../components/Layout/Layout'

const InitialPage = () => {
  return (
    <Layout title={"Initial Page"}>
        Initial Page
        <Button label={"Entrar"} url="filter"/>
    </Layout>
  )
}

export default InitialPage