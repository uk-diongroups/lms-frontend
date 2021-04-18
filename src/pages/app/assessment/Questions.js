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

    .percent{
        text-align: left;
        margin-top: -2%;
        font-size: 13px;
        letter-spacing: 0.02em;
        color: #B3B3B3;
        font-style: italic;
        line-height: 32px;
    }
`

const Direction = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    .left{
        text-align: left;
        .btn-left{
            width: 40px;
            height: 40px;
            left: 0.5px;
            top: 37.5px;
            background: #F2F4F8;
            border-radius: 8px;
            border: 0;
            cursor: pointer;
        }
    }
    .right{
        text-align: right;
        .btn-right{
            width: 40px;
            height: 40px;
            right: 0.5px;
            top: 37.5px;
            background: #F2F4F8;
            border-radius: 8px;
            border: 0;
            cursor: pointer;
        }
    }
    p{
        text-align: right;
        font-size: 13px;
        letter-spacing: 0.02em;
        color: #B3B3B3;
        line-height: 32px;
        margin-top: 12px;
    }
`

const Progress = styled.div`
    margin: 0px auto 20px;
    padding:0;
    width:100%;
    height:5px;
    overflow:hidden;
    background:#e5e5e5;
    border-radius:6px;
    
    .bar {
        position:relative;
        float:left;
        min-width:1%;
        height:100%;
        background:#0BA759;
    }
`
const Question = styled.div`
    display: grid;
    grid-template-columns: 5% auto 11%;
    width: 85%;
    margin: auto;
    .number{
        width: 30px;
        height: 30px;
        background:#F8F9FB;
        text-align: center;
        border-radius: 19px;
        font-weight: 500;
        font-size: 21px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: #1B2056;
    }
    p{
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: #333333;
        order: 1;
        margin: 0px 32px;
    }
`

const Answer = styled.div`
    width: 70%;
    margin-top: 3%;
    margin-left: auto;
    margin-right: auto;
    option{
        width: fit-content;
        background-color: brown;
        padding: 15px;
        background: #FFFFFF;
        border: 1px solid #F2F4F8;
        box-shadow: 0px 8px 48px #f8f9fb;
        margin: 16px 0px;
        cursor: pointer;
    }
`
const Btn = styled.div`
    width:70%;
    margin: auto;
    button{
        background: #0BA759;
        width: 100%;
        margin: auto;
        color: white;
        border: 0;
        padding: 15px;
        border-radius: 3px;
        cursor: pointer;
    }
`

const Questions = () => {
    return (
        <Wrapper>
            <small>academy/2021assesment/april</small>
            <TimeRemain>
                <div style={{width: '90%', margin: 'auto'}}>
                    <h4>Time Remaining</h4>
                    <h2>25:45</h2>
                    <Direction>
                        <div className="left">
                            <button className="btn-left"> &#60; </button>
                        </div>
                        <div className="right">
                            <button className="btn-right"> &#62; </button>
                        </div>
                        <p></p>
                        <p>5/25</p>
                    </Direction>
                    <Progress className="progress">
                        <div className="bar" style={{width:'25%'}}></div>
                    </Progress>
                    <p className="percent">35% complete</p>
                </div>
            </TimeRemain>  

            <div>
                <Question>
                    <div className="number">1</div>
                    <p>The factors that helps you to do what is to be done at the appropraite time without having much issues and stuffs are?</p>
                </Question>
                <Answer>
                    <option>The factors that helps you to do what</option>
                    <option>The factors that helps you to do what</option>
                    <option>The factors that helps you to do what</option>
                    <option>The factors that helps you to do what</option>
                </Answer>
                <Btn>
                    <button>Continue</button>
                </Btn>
            </div>
        </Wrapper>
    );
};

export default Questions;