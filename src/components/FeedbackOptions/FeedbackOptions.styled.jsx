import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonStyled = styled.button`
    font-size: 24px;
    width: 96px;
    height: 64px;
    text-transform: capitalize;
    margin-right: 16px;
    margin-bottom: 16px;
    outline: 2px solid grey;
    border-radius: 16px;
    
    background-color: ${props => {
        switch (props.name) {
            case "good":
                return 'green';
            case "neutral":
                return 'orange';
            case "bad":
                return 'red';
            default: return "blue";
            }
        }
    };
    
    color: white;
    box-shadow: -2px 4px 26px 10px rgba(235, 95, 95, 0.5);
`;