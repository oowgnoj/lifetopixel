import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "views/components/layout";
import { useAuth } from "context/auth";
import {requestDay} from 'lib/api/day'
import {requestNote} from 'lib/api/note'

const Index = () => {
  const [days, setDays] = useState([])
  useEffect(()=> {
    (async () => {
      await getDays()
    })()
  },[])

  const getDays = async () => {
    try{
      const { data } = await requestDay();
      setDays(data)
    }catch(err){
      alert(err)
    }
  }

  return (
    <Layout>
      <Wrapper>

        <Day>
        {days.map(day => {
          return <>
                  <MainAct>{day.mainActivity}</MainAct>
                  <Good>{day.goodThing}</Good>
                  <Bad>{day.badThing}</Bad>
                  <WriteDay>{day.goalTomorrow}</WriteDay>
                  <WriteDay>{day.registeredAt}</WriteDay>
                  <Rating>{'♥'.repeat(Number(day.score))}</Rating>
                  </>
        })}
        </Day>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div``;
const Day = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`
const Note = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
const MainAct = styled.div`
`
const WriteDay = styled.div`
`
const Good = styled.div`
`
const Bad = styled.div`
`
const Rating = styled.div`
`

export default Index;
