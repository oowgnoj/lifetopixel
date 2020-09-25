import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUserInfo } from "context/authContext";
import { useHistory } from "react-router-dom";

import { requestDay } from "lib/api/day";
import { requestJob } from "lib/api/job";
import { requestNote } from "lib/api/note";
import { requestLogout } from "lib/api/auth";

import IJob from "types/job";
import IDay from "types/day";
import INote from "types/note";

export default (props: any) => {
  const { userInfo, setUserInfo }: any = useUserInfo();
  const [days, setDays] = useState<IDay[]>([]);
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [notes, setNotes] = useState<INote[]>([]);
  const history = useHistory();

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

  const handleLogout = () => {
    setUserInfo(null);
    requestLogout();
    history.push("/login");
  };

  if (!userInfo && !days && jobs && notes) {
    return <div>waiting</div>;
  }

  return (
    <>
      <button onClick={handleLogout}>logout</button>
      <Link to="/">Home</Link>
      <Link to="/day">day</Link>
      <Link to="/job">job</Link>
      <Link to="/note">note</Link>
      <Wrapper>
        <div>{userInfo?.username}</div>
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
