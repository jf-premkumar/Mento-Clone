import styled from "styled-components";

export const Dataproducts = styled.div`
  .Main_cont {
    width: 100%;
    height: 2287px;
    background-image: url(${({ image }) => image});
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0%;
    background-color: black;
  }

  .items_cont {
    width: 1146px;
    height: 400px;
    margin: auto;
    margin-top: 180px;
    text-align: center;
    color: white;
  }

  .learnmore {
    width: 1146px;
    height: 18px;
    text-align: center;
    font-weight: bold;
  }

  .div_right {
    width: 390px;
    height: 64px;
    margin: auto;
    text-align: justify;
    font-weight: bold;
    color: white;
    margin-top: 20px;
  }

  .heading {
    width: 700px;
    height: 126px;
    font-size: 25px;
    margin: auto;
  }

  .offer {
    width: 170px;
    height: 18px;
    margin: auto;
    font-weight: bold;
  }

  .button > button {
    margin-top: 10px;
    border-radius: 4px;
    width: 116px;
    height: 39px;
    background-image: linear-gradient(
      48deg,
      rgb(236, 26, 91) 0%,
      rgb(246, 140, 38) 100%
    );
    font-size: 13px;
    color: white;
    font-weight: bold;
    border: none;
  }

  .orange {
    color: #f68c26;
  }

  .player {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    margin: auto;
    font-weight: bold;
    margin-top: 25px;
  }
`;
