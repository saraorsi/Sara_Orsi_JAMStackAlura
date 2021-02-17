import styled from 'styled-components';

const WrapperProjetos = styled.div`
    width: 100%;
    z-index: 10;
    padding: 5rem 0 0;
`



export default function wrapperProjetos({children}){
    return(
        <WrapperProjetos> 
            {children}
        </WrapperProjetos>
    )
}