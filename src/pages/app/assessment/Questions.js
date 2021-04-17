import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 20px;
    padding-left: 25px;
	padding-right: 33px;
`

const TimeRemain = styled.div`
    border-top: 1px solid #F2F4F8;
    margin-top: 1%;
    padding: 3%;
    text-align: center;
    h4{
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #F97319;
    }
    h2{
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 44px;
        letter-spacing: 0.02em;
        color: #1B2056;
        opacity: 0.7;
    }
`

const Questions = () => {
    return (
        <Wrapper>
            <small>academy/2021assesment/april</small>
            <TimeRemain>
                <h4>Time Remaining</h4>
                <h2>25:45</h2>
            </TimeRemain>  
        </Wrapper>
    );
};

export default Questions;