import React from 'react';
import styled from 'styled-components';


const Use = () => {
    return (
        <UseInfo>
            <div className='use-section'>
                <div className='use-header'>
                    <p className='use-title'>내일의 집 이용안내</p>
                </div>

            </div>
        </UseInfo>
    );
};

export default Use;

const UseInfo = styled.div`

.use-section {
    background-color: #A9EF72;
    width: 100%;
    height: 700px;
    margin-bottom: 150px;
    margin-top: 150px;
 
}

.use-title {
    font-size: 42px;
    font-weight: 700;
    float: left;
    margin-left: 130px;
    margin-top: 80px;
    margin-bottom: 30px;
    color: #fff;
    font-weight: bold;
}


`;
