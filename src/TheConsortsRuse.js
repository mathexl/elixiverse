import styled from "styled-components";
import { CTA } from "./Splash";
import { GeneralContent } from "./Styles";

export const TheConsortsRuse = () => {
  return (
    <TheConsortsRuseDiv>
      <TheConsortsRuseCover>Cover TBA</TheConsortsRuseCover>
      <TheConsortsRuseContent>
        <h1>The Consort’s Ruse</h1>
        <h2>Book 1 of the Mira’s Miracles series<span className={"hideOnMobile"}> set in the Elixiverse</span>.</h2>
        <h3>Summary</h3>
        <p>
   After discovering there might be more to her friend’s death, Mira travels to Daisha, a city once considered a fairy-tale. In a metropolis plagued by thievery and turmoil, Mira must infiltrate a magical high society to help defeat the Consort, the tyrant responsible for her loss. <br></br> <br></br>
          <span className={"hideOnMobile"}>
            There are no dragons, elves, or sorcerers in the Elixiverse. Rather,
            powers — attained via short-lasting, commercial elixirs — are more
            likely to produce snobbish fashion enterprises or underground
            theatrical performances over duels or skirmishes. Make no mistake,
            combat happens in Daisha aplenty, but Mira is faster to discover the
            eccentricity of elixiry over its violent power.
          </span>
        </p>
        <h3>Details</h3>
        <p>98,551 words, 377 pages. </p>
        <CTA>Sign Up for Updates</CTA>
      </TheConsortsRuseContent>
    </TheConsortsRuseDiv>
  );
};

const TheConsortsRuseDiv = styled.div`
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
      background:white;
      padding: 20px;
      border-radius: 5px;
      box-sizing:border-box;
    }
  }
`;

const TheConsortsRuseCover = styled.div`
  width: 300px;
  height: 450px;
  border: 5px white solid;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-variant-caps: small-caps;
  float:left;

  @media screen and (max-width: 700px) {
    & {
      display: none;
    }
  }
`;

const TheConsortsRuseContent = styled(GeneralContent)`
  width: calc(100% - 310px);
  padding-left: 50px;
  box-sizing:border-box;
  float:left;
  @media screen and (max-width: 700px) {
    & {
      width: 100%;
      padding-left: 0px;
    }
  }
`;
