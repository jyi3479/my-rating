import React from "react";
import styled from "styled-components";

const Star = (props) => {
  const [count, setCount] = React.useState(0);
  const star_count = Array.from({ length: 5 }, (v, i) => i);
  const starCount = (params) => {
    console.log(params.idx);
    setCount(params.idx + 1);
  };

  return (
    <div style={{ display: "flex" }}>
      {star_count.map((num, idx) => {
        console.log(count);
        return (
          <Circle
            onClick={() => {
              starCount({ idx });
            }}
            key={idx}
            style={
              idx < count
                ? { backgroundColor: "#AD9AEE" }
                : { backgroundColor: "#f9ffff" }
            }
          ></Circle>
        );
      })}
    </div>
  );
};

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #ddd;
  margin: 5px;
  display: flex;
`;

export default Star;
