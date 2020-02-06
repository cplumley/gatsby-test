import styled from "@emotion/styled"

const StyledCard = styled.div`
  height: 150px;
  width: 80%;
  background: #efefec;
  border: 1px solid #efefec;
  box-shadow: -25px 25px #efefec, -24px 24px white inset;
  display: inline-flex;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  position: relative;
  z-index: 1;

  &:hover {
    box-shadow: -25px -25px #efefec, -24px -24px white inset;
    transform: rotate(1turn);
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:before {
    content: "";
    position: absolute;
    height: 12px;
    left: 5px;
    background: burlywood;
    width: 50px;
    bottom: 1rem;
    z-index: -1;
    transition: width 0.2s ease-in-out;
  }

  &:hover:before {
    width: 150px;
  }

  h4 {
    align-self: flex-end;
    text-transform: uppercase;
    margin: 0;
  }
`

export default StyledCard
