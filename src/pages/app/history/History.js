import React from 'react';
import styled from 'styled-components';

const Wrapper= styled.div`
    padding-left: 58px;
    padding-top: 20px;
    padding-right: 74px;
    .history__header{
        border-bottom: 1px solid #F2F4F8;
        padding-bottom: 10px;
        small{
            color: #1B2056;
        }
    }
`

const CourseHistory= styled.div`
    h4{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: #1B2056;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .table__container{
        background: #FFFFFF;
        border: 1px solid #DFE0EB;
        box-shadow: 0px 8px 32px rgba(221, 223, 238, 0.5);
        border-radius: 16px;
    }
    .container__nav{
        border-bottom: 1px solid #dddddd;
        padding-top: 5%;
        padding-left: 3%;
        margin-bottom: 3%;
        .nav{
            text-transform: uppercase;
            margin-bottom: 0px;
            .nav-item{
                margin-right: 15px;
                font-weight: 600;
                color: rgba(51, 51, 51, 0.5);
                padding-bottom: 5px;
                cursor: pointer;
            }
        }
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        color: #9FA2B4;
      }

      th{
          font-weight:bold;
      }

      td{
        font-size: 14px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: #333333
      }
      
      td, th {
        border-bottom: 1px solid #dddddd;
        text-align: left;
        padding: 30px;
      }

`

const History = () => {
    return (
        <Wrapper>
            <div className="history__header">
                <small>History</small>
            </div>
            <CourseHistory>
                <h4>HISTORY</h4>
                <div className="table__container">
                    <div className="container__nav">
                        <ul className="nav">
                            <li className="nav-item">Courses</li>
                            <li className="nav-item">Assessment</li>
                        </ul>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Assessment Title</th>
                                <th>Type</th>
                                <th>Duration</th>
                                <th>Completion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>March Assessment 2021</td>
                                <td>Assessment</td>
                                <td>30m</td>
                                <td>100%</td>
                            </tr>

                            <tr>
                                <td>March Assessment 2021</td>
                                <td>Assessment</td>
                                <td>90m</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CourseHistory>
        </Wrapper>
    );
};

export default History;