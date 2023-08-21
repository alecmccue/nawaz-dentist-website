import styled from "@emotion/styled";

export const CareCreditButtonWrapper = styled.div`
  background-color: #008378;
  border-radius: 0.5rem;
  color: white;
  display: flex;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  align-items: center;

  &:hover {
    background-color: #009982;
  }
`;

export const CareCreditSignUpWrapper = styled.div`
  align-items: center;
  background-color: #A8D99C;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 20rem;
  justify-content: center;
  padding: 1rem;
  width: 25rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CareCreditWrapper = styled.div`
  align-items: center;
  border-radius: 1rem;
  box-shadow: rgba(135, 228, 219, 0.5) 0 10px 10px -10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 80rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const InsuranceBanner = styled.div`
  background: url(/insurance-banner.jpg);
  background-color: azure;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-shrink: 0;
  height: 30rem;
  width: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    background: url(/insurance-banner-mobile.jpg);
  }
`

export const InsuranceWrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 1rem;
    gap: 1rem;
  }
`;


export const IntroWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 80rem;
  padding: 2rem;
  text-align: center;
`;