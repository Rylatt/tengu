import React, { useState } from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <CounterContainer>
            <button onClick={handleIncrement}>Increment</button>
            <p>Count: {count}</p>
        </CounterContainer>
    );
};

export default Counter;

