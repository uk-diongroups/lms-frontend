import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Doodle from '../../../assets/img/doodle.svg';
import Sally from '../../../assets/img/Saly-16.svg';


const Wrapper = styled.div`
    padding-top: 20px;
    padding-left: 25px;
	padding-right: 33px;
`

export const Monthly = styled.div`
    display: grid;
    grid-template-columns: 52% auto;
    text-align: justify;
    h4{
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 44px;
        letter-spacing: 0.02em;
        color: #1B2056;
        width: 486px;
    }
    p{
        font-style: normal;
        width: 414px;
        font-weight: normal;
        font-size: 13px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: #333333;
    }
    .btn-default{
        padding: 16px 59px;
        background: #DCDEED;
        border-radius: 6px;
        border: 0px;
        cursor: pointer;
    }
    .btn-success{
        background: #0BA759;
        border-radius: 6px;
        padding: 16px 59px;
        border:0;
        color: white;
        cursor: pointer;
        a{
            color: white;
        }
    }
`

const Assessment = () => {
    return (
        <Wrapper>
            <Monthly>
                <div>
                    <h4>Monthly Employee Assesment</h4>
                    <p>
                        This monthly assesment is strictly meant for all UK-DION group staff. 
                        Be careful to answer the questions corretly as your score might be part 
                        of your performance appraisal.
                    </p>
                    <div style={{display: 'flex',justifyContent: 'space-between',marginTop:'7%'}}>
                        {/* <button className="btn btn-default">GO BACK</button> */}
                        <button className="btn btn-success">
                            <Link to="/app/questions">PROCEED TO ASSESSMENT</Link>
                        </button>
                    </div>
                </div>

                <div>
                   <img src={Doodle} alt="" />
                   <img src={Sally} alt="" style={{width:'auto',height:'auto'}}/>
                </div>
            </Monthly>
        </Wrapper>
    );
};

export default Assessment;