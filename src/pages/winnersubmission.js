import React from "react"
import styled from "styled-components"
import { Animated } from "react-animated-css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import winners from "../data/winners2020.json"

export const Container = styled.div`
  width: 90%;
  margin-bottom: 100px;
`

export const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
`

const Event = styled.div`
  color: rgb(187,51,48);
  font-size: 40px;
  margin-top: 100px;
  font-weight: 600;
  margin-bottom: 15px;
`

const Winners = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`

const HMember = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const CENTER = styled.div`
  text-align: center;
`
const Person = ({ name, position }) => {
  const Name = styled.div`
    font-weight: 500;
    font-size: 24px;
  `

  const Role = styled.div`
    margin-top: 10px;
  `

  return (
    <div
      style={{
        padding: "20px",
        margin: "10px",
        border: "1px solid rgb(175, 167, 167)",
        borderRadius: "6px",
      }}
    >
      <Name>{name}</Name>
      <Role>{position}</Role>
    </div>
  )
}

export default () => (
  <Layout>
    <SEO title="Winners Digexclan" />
    <CENTER>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Subtitle>Winning Entries</Subtitle>
        <iframe src="https://drive.google.com/embeddedfolderview?id=1BzHuSLZ3-mAnLbVw_GNHxxdhBURIe5h-#grid" style={{width:"100%", height:"600px", border:"0"}}></iframe>

        <div style={{textAlign: "center"}}>
  

        </div>
      </Container>
    </div>
    </CENTER>
  </Layout>
)
