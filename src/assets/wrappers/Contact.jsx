import { styled } from 'styled-components';

export const Wrapper = styled.section`
    padding-top: 9rem;
    background: var(--clr-primary-10);


    .page-info {
        max-width: 700px;
        min-height: calc(100vh - 21rem - 214px);
    }

    .page-info a {
        text-transform: uppercase;
        color: var(--clr-primary-5);
        transition: var(--transition);
    }

    .page-info a:hover {
        color: var(--clr-primary-1);
    }
`