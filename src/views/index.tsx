import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Layout from "views/components/layout";
import DayPic from "assets/images/day.jpeg";
import { useUserInfo } from "context/authContext";
import { requestDay } from "lib/api/day";
import { requestJob } from "lib/api/job";
import { requestNote } from "lib/api/note";

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

  if (!userInfo && !days && jobs && notes) {
    return <div>waiting</div>;
  }

  return (
    <Layout>
      <Wrapper>
        <Link to="/day">
          <ButtonImage src={DayPic} />
        </Link>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div``;
const ButtonImage = styled.img`
  width: 100%;
`;
