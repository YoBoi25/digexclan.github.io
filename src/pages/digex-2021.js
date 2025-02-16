import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Subtitle, Container } from "./members"
import Founder from "../components/About/Founder"

import Events from "../components/2019/Events"

import digexImg from "../images/digex.png"

import timelineImage from "../images/DigexBlueprints.jpeg"

const Landing = styled.div`
  width: 100%;
  margin-top: 2vh;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`

export const Muted = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #5d5d5d;
`

const RegLink = styled.a`
  text-decoration: none;
  color: #2977f5;

  &:visited {
    color: #2977f5;
  }
`

const T = styled.div``

const DigexImg = styled.img``

export default () => (
  <Layout>
    <SEO title="Digex 2021" />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Subtitle>Digex 2021</Subtitle>
        <Muted>
          The latest edition of our flagship event, Digex.{" "}
          
        </Muted>
        <div style={{"display":"flex",justifyContent: "center"}}>
          <img src={timelineImage} />
        </div>
        {/* <Landing> */}
        <Events />
        {/* </Landing> */}
        {/* <Founder /> */}
      </Container>
    </div>
  </Layout>
)
