import styled from "styled-components";

export const Header = styled.div`
  margin: 20px 20px;
  img {
    width: 100px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style-type: none;
    font-size: 16px;
  }

  ul li {
    margin-right: 15px;
  }

  li a {
    text-decoration: none;
    font-size: 20px;
    color: #333;
  }
`;

export const Project = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: space-between;

  img {
    width: 600px;
    border-radius: 2%;
  }

  p {
    margin: auto 40px;
    font-size: 35px;
    color: #333;
  }
`;

export const Cases = styled.div`
  margin-top: 80px;

  ul {
    max-width: 300px;
    display: flex;
    list-style-type: none;
  }
`;
