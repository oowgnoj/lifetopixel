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

const Index = (props) => {
  const { userInfo, setUserInfo } = useUserInfo();

  const [days, setDays] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [notes, setNotes] = useState([]);
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

export default Index;
