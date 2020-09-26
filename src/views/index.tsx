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
    <Wrapper>
      <button onClick={handleLogout}>logout</button>
      <Link to="/">Home</Link>
      <Link to="/day">
        <button>하루 작성하기</button>
      </Link>
      <Link to="/job">
        <button>job</button>
      </Link>
      <Link to="/note">
        <button>note</button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 40vw;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
