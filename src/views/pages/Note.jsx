import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "views/components/layout";
import {requestNote} from 'lib/api/note'

const Index = () => {
  const [notes, setNotes] = useState([])
  useEffect(()=> {
    (async () => {
      await getNotes()
    })()
  },[])

  const getNotes = async () => {
    try{
      const { data } = await requestNote();
      setNotes(data)
    }catch(err){
      alert(err)
    }
  }
  return (
    <Layout>
      <Wrapper>
        <Note>
        {notes.map(note => {
          return <>
                  <MainAct>{note.title}</MainAct>
                  <MainAct>{note.summary}</MainAct>
                  <MainAct>{note.detail}</MainAct>
                  <MainAct>{note.tags.map((el)=> <span>{el.name} </span>)}</MainAct>
                  </>
        })}
        </Note>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div``;

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
