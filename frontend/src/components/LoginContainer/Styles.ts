import styled from 'styled-components';

export const SwitchContainer = styled.div`
    height: 70px;
    width: 200px;
    border-radius: 20px;
    margin: 0px 0px 20px 0px;
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    font-size: 20px;
    font-family: Inter;
    font-weight: 400;
`
export const SwitchButtonLogin = styled.div<SwitchButtonProps>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.isFalse ? '#027333' : '#fff')};
    color: ${(props) => (props.isFalse ? '#fff' : '#000')} ;
    /* box-shadow: ${(props) => (props.isFalse ? '' : '0px 0px 5px rgba(0, 0, 0, 0.9) inset;')} ;; */
`

interface SwitchButtonProps {
    isFalse: boolean;
  }
  
export const SwitchButtonSign = styled.div<SwitchButtonProps>`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.isFalse ? '#000' : '#fff')} ;
    background-color: ${(props) => (props.isFalse ? '#fff' : '#027333')};
`
export const ContainerLogin = styled.div`
    border-radius: 260.5px 260.5px 0px 0px;
    width: 521px;
    height: 702px;
    display:flex;
    background-color: #fff;
`
