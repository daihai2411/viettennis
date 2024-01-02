"use client";

import MatchItem from "@/components/tournaments/detail/draws/matchDraw/MatchItem";
import dynamic from "next/dynamic";
import { matches } from "./dummy";

if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  import("@g-loot/react-tournament-brackets");
}

const SingleEliminationBracket = dynamic(
  () =>
    import("@g-loot/react-tournament-brackets").then(
      (mod) => mod.SingleEliminationBracket
    ),
  { ssr: false }
) as any;

const SVGViewer = dynamic(
  () =>
    import("@g-loot/react-tournament-brackets").then((mod) => mod.SVGViewer),
  { ssr: false }
);

const SingleElimination = ({ listData }) => {
  const finalWidth = Math.max(window?.innerWidth - 50, 1900);
  const finalHeight = Math.max(window?.innerHeight - 100, 1900);

  const roundTextGenerator = (roundNumber) => {
    // Customize the round text based on the round number
    if (roundNumber === 1) {
      return "Vòng 2";
    } else if (roundNumber === 2) {
      return "Tứ kết";
    } else if (roundNumber === 3) {
      return "Bán kết";
    } else {
      return "Trung kết";
    }
  };

  console.log(listData);

  return (
    <>
      <SingleEliminationBracket
        // matches={matches as any}
        matches={matches as any}
        options={{
          style: {
            connectorColor: "#ececec",
            connectorColorHighlight: "#00bc59",
            roundHeader: {
              backgroundColor: "blue",
              fontColor: "#ffffff",
              roundTextGenerator,
            },
            svgBackground: "red",
          },
        }}
        svgWrapper={({ children, ...props }: any) => (
          <SVGViewer
            background="#fafafa"
            SVGBackground="#fafafa"
            width={finalWidth}
            height={finalHeight}
            {...props}
          >
            {children}
          </SVGViewer>
        )}
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
          // <div className="border-[2px] flex flex-col justify-around border-[#ececec]">
          //   <div
          //     className="hover:bg-green-common flex justify-between hover:text-white group shadow-sm"
          //     onMouseEnter={() => onMouseEnter(topParty.id)}
          //   >
          //     {/* <div>{topParty.name || teamNameFallback}</div>
          //     <div>{topParty.resultText ?? resultFallback(topParty)}</div> */}
          //     <div className="">{topParty.name || teamNameFallback}</div>
          //     <div className="flex items-center h-full">
          //       <div
          //         className="w-10 bg-[#f2f2f2]  group-hover:bg-green-400
          //        text-center"
          //       >
          //         6
          //       </div>
          //       <div className="w-10 text-center">26</div>
          //       <div
          //         className="w-10 bg-[#f2f2f2] group-hover:bg-green-400
          //         text-center"
          //       >
          //         16
          //       </div>
          //     </div>
          //   </div>
          //   <div
          //     style={{ height: "1px", width: "100%", background: "#ececec" }}
          //   />
          //   <div
          //     className="hover:bg-green-common hover:text-white group shadow-sm"
          //     onMouseEnter={() => onMouseEnter(bottomParty.id)}
          //     style={{ display: "flex" }}
          //   >
          //     <div>{bottomParty.name || teamNameFallback}</div>
          //     <div>{bottomParty.resultText ?? resultFallback(topParty)}</div>
          //   </div>
          // </div>
          <>
            {/* <div>{topParty.name || teamNameFallback}</div>
          <div>{topParty.resultText ?? resultFallback(topParty)}</div>
          <div>{bottomParty.name || teamNameFallback}</div>
          <div>{bottomParty.resultText ?? resultFallback(topParty)}</div> */}
            <MatchItem />
          </>
        )}
      />
    </>
  );
};
export default SingleElimination;
