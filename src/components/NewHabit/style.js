import styled from "styled-components";

const Container = styled.div`
     width: 98%;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     flex-direction: column;
     background-color: #F2F2F2;
     margin-right: 18px;
     margin-left: 17px;
`;

const ContainerNewHabit = styled.div`
     width: 100%;
     height: 180px;
     background-color: #FFFFFF;
     border-radius: 5px;  
     padding: 18px 16px 15px 19px;   
     font-family: 'Lexend Deca', sans-serif;
     margin-right: 18px;
     margin-left: 17px;
     margin-top: 20px;
`;

const Days = styled.div`
     display: flex;
     gap: 4px;
`;

const Button = styled.button`
     font-family: 'Lexend Deca', sans-serif;
     width: 30px;
     height: 30px;
     border-radius: 5px;
     border: 1px solid #D5D5D5;
     color: ${props => props.isSelected ? '#FFFFFF' : '#DBDBDB'};
     background-color: ${props => props.isSelected ? '#CFCFCF' : '#FFFFFF'};
     font-size: 19.976px;
     margin-bottom: 29px;
     cursor: pointer;
`;

const Options = styled.div`
     display: flex;
     justify-content: flex-end;
     gap: 23px;  
`;

const Cancel = styled.button`
     border: none;
     color: #52B6FF;
     background: #FFFFFF;
     font-size: 15.976px;
     font-family: 'Lexend Deca', sans-serif;
     cursor: pointer;
`;

const Save = styled.button`
     width: 84px;
     height: 35px;
     border-radius: 4.63636px;
     background-color: #52B6FF;
     color: #FFFFFF;
     border: none;
     font-size: 15.976px;
     font-family: 'Lexend Deca', sans-serif;
     cursor: pointer;
`;

export {
     Container,
     ContainerNewHabit,
     Cancel,
     Save,
     Days,
     Options,
     Button
}