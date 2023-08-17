import { styled } from 'styled-components';

export const Wrapper = styled.section`
    .about-center {
        display: grid;
        gap: 3rem 2rem;
    }

    .about-title {
        text-align: left;
        margin-bottom: 2rem;
    }

    .sectioncomponent .underline {
        margin-left: 0;
    }

    .about-img { 
        justify-self: center;
    }

    @media screen and (min-width: 992px) {
        .about-center {
            grid-template-columns: 1fr 1fr;
        }

        .about-img::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 0.25rem solid var(--clr-primary-5);
            top: 2rem;
            left: -2rem;
            border-radius: var(--radius);
        }

        .about-img {
            position: relative;
        }

        .about-info {
            align-self: center;
        }
    }
`