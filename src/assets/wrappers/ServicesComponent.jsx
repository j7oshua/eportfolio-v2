import { styled } from 'styled-components';

export const Wrapper = styled.section`
    background: var(--clr-grey-10);
    padding-top: 3rem;
    padding-bottom: 3rem;

    .service {
        background: var(--clr-white);
        padding: 3rem 1.5rem;
        margin-bottom: 2rem;
        border-radius: var(--radius);
        text-align: center;
        transition: var(--transition);
    }

    .service-icon {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .service .underline {
        width: 3rem;
        height: 0.12rem;
        transition: var(--transition);
    }

    .service p {
        transition: var(--transition);
        padding-top: 1rem;
    }

    .service:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
    }

    .service:hover p {
        color: var(--clr-white);
    }

    .service:hover .underline {
        background: var(--clr-white);
    }

    @media screen and (min-width: 676px) {
        .services-center {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 2rem;
        }
    
    }

    @media screen and (min-width: 992px) {
        .services-center {
            grid-template-columns: repeat(3, 1fr);
        }
    
    }
`