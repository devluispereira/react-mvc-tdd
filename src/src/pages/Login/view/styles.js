import styled from "styled-components";

export const Container = styled.div`
  form {
    background: rgba(255, 255, 255, 0.8);
    position: fixed;
    height: 600px;
    width: 500px;
    right: 50px;
    top: 150px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #inputs {
      margin-top: 50px;
      height: 300px;
      display: flex;
      flex-direction: column;
    }

    #actions {
      height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      #elipse {
        .lds-ellipsis {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-ellipsis div {
          position: absolute;
          top: 33px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #acacac;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
          left: 8px;
          animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
          left: 8px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
          left: 32px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
          left: 56px;
          animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes lds-ellipsis3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
        @keyframes lds-ellipsis2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(24px, 0);
          }
        }
      }
    }

    #remember {
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
        font-weight: bold;
        color: #3e3e3e;
        margin-top: 8px;
      }
      input {
        cursor: pointer;
      }
    }
  }
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  transition: 200ms linear;

  :hover {
    transform: scale(1.1);
  }
`;
export const Content = styled.div`
  height: 100%;
  width: 100%;

  z-index: 100;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 100px;
  h1 {
    margin-top: 50px;
    font-size: 50px;
    color: #fff;
    animation: 0.5s ease-in both running fadein;
    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  span {
    margin-top: 100px;
    color: #fff;
    font-size: 22px;
    width: 810px;
    text-align: justify;

    animation: 0.7s ease-in 0.7s both running enter;
    @keyframes enter {
      0% {
        opacity: 0;
        transform: translateX(-1000px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;
export const BackgroundImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.9;
`;
export const Title = styled.h1`
  color: #222;
  background: none;
  font-size: 40px;
  opacity: 0.6;
`;
export const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 3px solid #acacac;
  height: 40px;
  margin-top: 10px;
  font-weight: bold;
  padding-left: 10px;
  transition: 100ms linear;
  :focus {
    border-bottom: 3px solid #333;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 100%;
  background: #acacac;
  border: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;

  transition: 200ms linear;
  :hover {
    background: #111;
  }
`;
