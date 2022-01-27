import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const week_days = ["월", "화", "수", "목", "금", "토", "일"];
  let navigate = useNavigate();
  const my_star = React.useRef(null);
  const star_count = Array.from({ length: 5 }, (v, i) => i);

  return (
    <Container>
      <Title>내 일주일은?</Title>
      <ListStyle>
        {week_days.map((day, index) => {
          let random = Math.floor(Math.random() * 5 + 1);
          return (
            <ItemStyle key={index}>
              <span>{day}</span>
              <div href={my_star}>
                {star_count.map((num, idx) => {
                  return (
                    <Star
                      key={idx}
                      style={
                        idx < random
                          ? { backgroundColor: "#AD9AEE" }
                          : { backgroundColor: "#f9ffff" }
                      }
                    ></Star>
                  );
                })}
              </div>
              <Button
                onClick={() => {
                  navigate(`./Detail/${day}`);
                }}
              ></Button>
            </ItemStyle>
          );
        })}
      </ListStyle>
    </Container>
  );
};

const Container = styled.div`
  padding: 5px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
`;
const ItemStyle = styled.div`
  padding: 5px;
  margin: 5px;
  /* background-color: aliceblue; */
  display: flex;
  span {
    width: 20px;
    height: 20px;
    padding: 10px;
    margin: 4px 4px 0 0;
    background-color: white;
    border-radius: 5px;
    font-weight: bold;
    color: #8f7cee;
    text-align: center;
  }
  div {
    display: flex;
  }
`;

const Star = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #f9ffff;
  margin: 5px;
  display: flex;
`;

const Button = styled.div`
  width: 0px;
  height: 0px;
  border-left: 40px solid #6a5acd;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  margin: 5px;
  display: flex;
`;

export default Home;
