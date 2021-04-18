import React from 'react';
import styled from 'styled-components'
import NotePad from '../../../assets/img/Saly-26.svg';

const Wrapper = styled.div`
    padding-left:200px;
    padding-right:200px;
    text-align: center;
    h3{
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 44px;
        letter-spacing: 0.02em;
        color: #1B2056;
        margin: 24px 0px;
    }
    .score{
        width: 597px;
        left: 0px;
        top: 68px;
        display:flex;
        flex-wrap: wrap;
    }
    .status{
        width:450px;
        background: #505CA4;
        border-radius: 24px 0 0px 24px;
        height: 180px;
        display: flex;
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 32px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            text-align: justify;
            padding: 18px;
            margin-top: 25px;
        }

    }
    .percentage-box{
        width: 147px;
        height: 180px;
        // left: 450px;
        // top: -50px;
        background: #434D89;
        border-radius: 0px 0px 24px 0px;
        h2{
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 32px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            margin: 36px 0px;
        }
        small{
            font-weight: normal;
            font-size: 20px;
            line-height: 32px;
            letter-spacing: 0.02em;
            color: rgba(255, 255, 255, 0.6);
        }
    }
`

const Message = styled.div`
    margin: auto;
    .btn-success,
    .btn{
        background: #0BA759;
        border-radius: 6px;
        padding: 16px 30px;
        border:0;
        color: white;
        cursor: pointer;
        font-size: 16px;
    }

    .btn-empty{
        background: none;
        border:none;
        color: #333333;
    }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #333333;
        margin: 24px 0px;
        width: 445px;
    }

`

const Result = () => {
    return (
        <Wrapper>
            <h3>Bravo! You’ve made it</h3>
            <div className="score">
                <div className="status">
                    <img src={NotePad} alt= "" style={{padding:'16px'}} />
                    <p>You’ve successfully completed your monthly assesment for the month of April</p>
                </div>
                <div className="percentage-box">
                    <h2>25%</h2>
                    <small>Score</small>
                </div>

                <Message>
                    <p>You can as well check other development courses we’ve specially tailored for our employees.</p>
                    <div>
                        <button className="btn btn-success">Take other courses</button>
                        <button className="btn btn-empty">I’ll do that later</button>
                    </div>
                </Message>
            </div>
        </Wrapper>
    );
};

export default Result;