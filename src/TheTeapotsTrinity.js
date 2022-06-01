import styled from "styled-components";
import { CTA } from "./Splash";
import { GeneralContent } from "./Styles";
import cover from "./img/cover.jpg";


export const TheTeapotsTrinity = () => {
  return (
    <TheTeapotsTrinityDiv>
      <TheTeapotsTrinityCover><img src={cover}></img></TheTeapotsTrinityCover>
      <TheTeapotsTrinityContent>
        <h1>The Teapot's Trinity</h1>
        <h2>
          Book 1 of the Mira’s Miracles series
          <span className={"hideOnMobile"}> set in the Elixiverse</span>.
        </h2>
        <h3>Summary</h3>
        <p>
          After discovering there might be more to her sister's death, Mira
          travels to an illegal underground city that'splagued by thievery and turmoil. 
          There, she must infiltrate a
          magical high society to defeat the Consort, the tyrant
          responsible for her loss. <br></br> <br></br>
        </p>
        <h3>Details</h3>
        <p>98,551 words, 377 pages. </p>
        <br></br>
        <CTA href="http://eepurl.com/hPlauf" target="_blank">Sign Up for Updates</CTA>
      </TheTeapotsTrinityContent>
    </TheTeapotsTrinityDiv>
  );
};

const TheTeapotsTrinityDiv = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
  z-index: 3;
  position: relative;

  @media screen and (max-width: 700px) {
    & {
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
      display: inline-block;
      margin-top: 20px;
      background: white;
      padding: 20px;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }
`;

const TheTeapotsTrinityCover = styled.div`
  width: 300px;
  border: 5px white solid;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-variant-caps: small-caps;
  float: left;
  & > img {
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    & {
      display: none;
    }
  }
`;

const TheTeapotsTrinityContent = styled(GeneralContent)`
  width: calc(100% - 310px);
  padding-left: 50px;
  box-sizing: border-box;
  float: left;

  & p {
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 700px) {
    & {
      width: 100%;
      padding-left: 0px;
    }
  }
`;
