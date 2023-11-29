"use client";

import dynamic from "next/dynamic";

if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  import("@g-loot/react-tournament-brackets");
}

const SingleEliminationBracket = dynamic(
  () =>
    import("@g-loot/react-tournament-brackets").then(
      (mod) => mod.SingleEliminationBracket
    ),
  { ssr: false }
);

const Match = dynamic(
  () => import("@g-loot/react-tournament-brackets").then((mod) => mod.Match),
  { ssr: false }
);

const SVGViewer = dynamic(
  () =>
    import("@g-loot/react-tournament-brackets").then((mod) => mod.SVGViewer),
  { ssr: false }
);

const SingleElimination = () => {
  const finalWidth = Math.max(window?.innerWidth - 50, 1200);
  const finalHeight = Math.max(window?.innerHeight - 100, 500);

  return (
    <SingleEliminationBracket
      matches={simpleSmallBracket}
      //   matchComponent={Match as any}
      svgWrapper={({ children, ...props }: any) => (
        <SVGViewer
          background="#FFF"
          SVGBackground="#FFF"
          width={finalWidth}
          height={finalHeight}
          {...props}
        >
          {children}
        </SVGViewer>
      )}
      options={{
        style: {
          roundHeader: { backgroundColor: "#AAA" },
          connectorColor: "#ececec",
          connectorColorHighlight: "#2DA46B",
        },
      }}
      onMatchClick={(match) => console.log(match)}
      onPartyClick={(match) => console.log(match)}
      matchComponent={({
        match,
        onMatchClick,
        onPartyClick,
        onMouseEnter,
        onMouseLeave,
        topParty,
        bottomParty,
        topWon,
        bottomWon,
        topHovered,
        bottomHovered,
        topText,
        bottomText,
        connectorColor,
        computedStyles,
        teamNameFallback,
        resultFallback,
      }) => (
        <div className="border-[2px] flex flex-col justify-around border-[#ececec]">
          <div
            className="hover:bg-green-common flex justify-between hover:text-white group shadow-sm"
            onMouseEnter={() => onMouseEnter(topParty.id)}
          >
            {/* <div>{topParty.name || teamNameFallback}</div>
            <div>{topParty.resultText ?? resultFallback(topParty)}</div> */}
            <div className="">{topParty.name || teamNameFallback}</div>
            <div className="flex items-center h-full">
              <div
                className="w-10 bg-[#f2f2f2]  group-hover:bg-green-400
               text-center"
              >
                6
              </div>
              <div className="w-10 text-center">26</div>
              <div
                className="w-10 bg-[#f2f2f2] group-hover:bg-green-400
                text-center"
              >
                16
              </div>
            </div>
          </div>
          <div
            style={{ height: "1px", width: "100%", background: "#ececec" }}
          />
          <div
            className="hover:bg-green-common hover:text-white group shadow-sm"
            onMouseEnter={() => onMouseEnter(bottomParty.id)}
            style={{ display: "flex" }}
          >
            <div>{bottomParty.name || teamNameFallback}</div>
            <div>{bottomParty.resultText ?? resultFallback(topParty)}</div>
          </div>
        </div>
      )}
    />
  );
};
export default SingleElimination;

export const simpleSmallBracket = [
  {
    id: 19753,
    nextMatchId: null,
    tournamentRoundText: "3",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [],
  },
  {
    id: 19754,
    nextMatchId: 19753,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: null,
        isWinner: false,
        status: null,
        name: "CoKe BoYz",
        picture: "teamlogos/client_team_default_logo",
      },
    ],
  },
  {
    id: 19755,
    nextMatchId: 19754,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCORE_DONE",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "Won",
        isWinner: true,
        status: "PLAYED",
        name: "CoKe BoYz",
        picture: "teamlogos/client_team_default_logo",
      },
      {
        id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
        resultText: "Lost",
        isWinner: false,
        status: "PLAYED",
        name: "Aids Team",
        picture: "teamlogos/client_team_default_logo",
      },
    ],
  },
  {
    id: 19756,
    nextMatchId: 19754,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "RUNNING",
    participants: [
      {
        id: "d8b9f00a-0ffa-4527-8316-da701894768e",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Art of kill",
        picture: "teamlogos/client_team_default_logo",
      },
    ],
  },
  {
    id: 19757,
    nextMatchId: 19753,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [],
  },
  {
    id: 19758,
    nextMatchId: 19757,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      {
        id: "9397971f-4b2f-44eb-a094-722eb286c59b",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Crazy Pepes",
        picture: "teamlogos/client_team_default_logo",
      },
    ],
  },
  {
    id: 19759,
    nextMatchId: 19757,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      {
        id: "42fecd89-dc83-4821-80d3-718acb50a30c",
        resultText: null,
        isWinner: false,
        status: null,
        name: "BLUEJAYS",
        picture: "teamlogos/client_team_default_logo",
      },
      {
        id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Bosphorus",
        picture: "teamlogos/r7zn4gr8eajivapvjyzd",
      },
    ],
  },
];
