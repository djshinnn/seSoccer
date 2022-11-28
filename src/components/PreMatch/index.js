import React, { useState } from "react";
import PreMatchItem from "./PreMatchItem";
import { PreMatchContainer } from "./style";

const matchList = [
  {
    id: 1,
    date: "11월 04일",
    time: "11:12",
    homeTeam: "네덜란드",
    homeTeamScore: 0,
    awayTeam: "웨일스",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/netherlands.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/wales.png?raw=true",
  },
  {
    id: 2,
    date: "11월 26일",
    time: "11:24",
    homeTeam: "잉글랭드",
    homeTeamScore: 0,
    awayTeam: "세네갈",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/england.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/senegal.png?raw=true",
  },
  {
    id: 3,
    date: "12월 05일",
    time: "11:12",
    homeTeam: "아르헨티나",
    homeTeamScore: 0,
    awayTeam: "덴마크",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/argentina.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/denmark.png?raw=true",
  },
  {
    id: 4,
    date: "12월 05일",
    time: "11:12",
    homeTeam: "프랑스",
    homeTeamScore: 0,
    awayTeam: "멕시코",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/france.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/mexico.png?raw=true",
  },
  {
    id: 5,
    date: "12월 06일",
    time: "11:12",
    homeTeam: "스페인",
    homeTeamScore: 0,
    awayTeam: "모로코",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/spain.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/moroco.png?raw=true",
  },
  {
    id: 6,
    date: "12월 06일",
    time: "11:12",
    homeTeam: "벨기에",
    homeTeamScore: 0,
    awayTeam: "독일",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/belgium.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/germany.png?raw=true",
  },
  {
    id: 7,
    date: "12월 07일",
    time: "11:11",
    homeTeam: "브라질",
    homeTeamScore: 0,
    awayTeam: "대한민국",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/brazil.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/korea.png?raw=true",
  },
  {
    id: 8,
    date: "12월 07일",
    time: "11:11",
    homeTeam: "포르투갈",
    homeTeamScore: 0,
    awayTeam: "스위스",
    awayTeamScore: 0,
    win: 0,
    draw: 0,
    lose: 0,
    homeTeamVote: 0,
    awayTeamVote: 0,
    drawVote: 0,
    homeTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/portugal.png?raw=true",
    awayTeamImg:
      "https://github.com/djshinnn/qatar-worldcup-clone/blob/main/images/countries/switzerland.png?raw=true",
  },
];
const PreMatch = () => {
  const [matchData, setMatchData] = useState(matchList);

  const matchEnd = (date) => {
    // let itemDate = item.date.split(d)
    // const newMatchData = matchData.filter(
    //   (item) => item.date  date
    // );
    // setMatchData(...matchData, ...newMatchData);
  };

  return (
    <PreMatchContainer>
      {matchList.map((match) => (
        <PreMatchItem key={match.id} {...match} matchEnd={matchEnd} />
      ))}
    </PreMatchContainer>
  );
};

export default PreMatch;
