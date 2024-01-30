import styled, {keyframes} from "styled-components";

const InOut = keyframes`
    from  {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: initial;
        transform: initial;
        
    }
`
const SwitchSide = keyframes`
    from {

    }
    to{

    }
`

interface SwitchButtonProps {
    isFalse: boolean;
  }

export const TitleOrange = styled.h1`
    font-size: 64px;
    font-weight: 700;
    font-family: Inter;
    color: #D96C0D;
`
export const TextHello = styled.p`
    align-items: center;
    color: #027333;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    display: flex;
`
export const OrangeContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 41px 41px 0px 0px;
    background-color: #FFB878;
    padding-bottom: 20px;
`
export const ContainerLogin = styled.div`
    border-radius: 260.5px 260.5px 0px 0px;
    width: 521px;
    height: 702px;
    display:flex;
    background-color: #fff;
`
export const FormArea = styled.form`
    width: 100%;
    margin-top: 150px;
    padding: 0px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    animation: ${InOut} 0.5s ease-in-out;

`

export const InputLogin = styled.input`
    border-radius: 5px;
    background: #D9D9D9;
    height: 40px;
    width: 100%;
    padding-left: 10px;
    margin-bottom: 10px;
    border: 1px solid #027333;
`
export const TitleForm = styled.h1`
    font-size: 64px;
    font-weight: 700;
    font-family: Inter;
    color: #027333;
    text-align: center;
    margin-bottom: 10px
`

export const ButtonLogin = styled.button`
    border-radius: 10px;
    background: #027333;
    width: 151px;
    height: 45px;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #fff;
    margin-top: 10px;

    &:disabled {
        background-color: #ccc; 
        color: #666; 
        cursor: not-allowed;
    }
`;


export const Validation = styled.span`
    color: red;
    font: 400;
    font-size: 18px;

`
export const ButtonSwitch = styled.span`
    font-weight: 500;
    margin: 2px;
    color: #027333;
    font: Inter;
    text-decoration: underline;
    font-size: 16px;
    display: flex;
`
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
export const SwitchButtonSign = styled.div<SwitchButtonProps>`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.isFalse ? '#000' : '#fff')} ;
    background-color: ${(props) => (props.isFalse ? '#fff' : '#027333')};
`
