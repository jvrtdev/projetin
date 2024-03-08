import styled, {keyframes} from 'styled-components';

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

export const FormArea = styled.form`
    width: 100%;
    margin-top: 150px;
    padding: 0px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    animation: ${InOut} 0.5s ease-in-out;
`
export const TitleForm = styled.h1`
    font-size: 64px;
    font-weight: 700;
    font-family: Inter;
    color: #027333;
    text-align: center;
    margin-bottom: 10px
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
export const Validation = styled.span`
    color: red;
    font: 400;
    font-size: 18px;

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