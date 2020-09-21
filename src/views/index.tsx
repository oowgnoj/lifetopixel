import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { requestDay } from "../lib/api/day";
import { requestJob } from "../lib/api/job";
import { requestNote } from "../lib/api/note";
import IJob from "types/job";
import IDay from "../types/day";
import INote from "types/note";

export default () => {
  const [days, setDays] = useState<IDay[]>([]);
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [notes, setNotes] = useState<INote[]>([]);
  useEffect(() => {
    async function getData() {
      const days = await requestDay();
      const jobs = await requestJob();
      const note = await requestNote();
      setDays(days);
      setJobs(jobs);
      setNotes(note);
    }
    getData();
  }, []);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/day">day</Link>
          </li>
          <li>
            <Link to="/job">job</Link>
          </li>
          <li>
            <Link to="/note">note</Link>
          </li>
        </ul>
      </nav>
      <Wrapper>
        <Body>
          <div>하루 목록</div>
          {days.map((el: IDay) => (
            <div>{el.mainActivity}</div>
          ))}
        </Body>
        <Body>
          <div>한 일 목록</div>
          {jobs.map((el: IJob) => (
            <div>{el.name}</div>
          ))}
        </Body>
        <Body>
          <div>노트 목록</div>
          {notes.map((el: INote) => (
            <div>{el.title}</div>
          ))}
        </Body>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
