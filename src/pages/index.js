import React from 'react'
import Layout from '../components/layout'
import Front from '../components/front'
import CommunitySection from '../components/community-section'

const IndexPage = ({data}) => (
  <Layout>
    <Front />
    <CommunitySection />
  </Layout>
)

export default IndexPage
