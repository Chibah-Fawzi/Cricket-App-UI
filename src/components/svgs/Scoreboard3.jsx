import * as React from "react";
import '../../App.css';


export default function Scoreboard3(props) {
  const { homeTeam, awayTeam, overs, runs } = props


  return (
    <div className="svg" style={{ marginTop: "-10vh" }}>
      <svg
        id="Plan_de_travail_1_1_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x={0}
        y={0}
        viewBox="0 0 1900 658"
        style={{
          enableBackground: "new 0 0 1900 658",
        }}
        xmlSpace="preserve"
      >
        <style>
          {
            ".st0{enable-background:new}.st2{fill:#fff}.st3{font-family:'NexaBold'}.st4{font-size:51.9672px}.st5{font-size:30px}.st10{font-size:36px}.st11{font-size:22.6154px}"
          }
        </style>
        <g id="Rectangle_2_2_" className="st0">
          <defs>
            <path
              id="SVGID_1_"
              className="st0"
              d="M215 261v188.6c512.5 34.3 1019.4 25.2 1531 0V261H215z"
            />
          </defs>
          <clipPath id="SVGID_2_">
            <use
              xlinkHref="#SVGID_1_"
              style={{
                overflow: "visible",
              }}
            />
          </clipPath>
          <image
            style={{
              overflow: "visible",
              clipPath: "url(#SVGID_2_)",
            }}
            width={1900}
            height={658}
            id="Rectangle_2_xA0_Image"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB2wAAAKSCAIAAACROLxZAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAE7pJREFUeNrs2EEBABAAwEC0U0oq ARWwBncR9tzc9wwAAAAAAPhZEgAAAAAAUExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlE BgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAA AADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgm MgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAA AABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAy kQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAA AABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACS iQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAA AAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQ TGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMA AAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACA ZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkA AAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAA JBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgA AAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAA IJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQG AAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAA AMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYy AAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAA AEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKR AQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAA AEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJ DAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAA AACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBM ZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAA AACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBk IgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAA AACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAk ExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAA AAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAg mcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYA AAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAA yUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIA AAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAA SCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEB AAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAA QDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokM AAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAA AJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExk AAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAA AJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQi AwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAA AIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQT GQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAA AAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZ yAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAA AAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJ RAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAA AAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABI JjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEA AAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABA MpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwA AAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAA kokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQA AAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAA kExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCID AAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAA gGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZ AAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAA ACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnI AAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAA ACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlE BgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAA AADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgm MgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAA AABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAy kQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAA AABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACS iQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAA AAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQ TGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMA AAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACA ZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkA AAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAA JBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgA AAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAA IJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQG AAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAA AMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYy AAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAA AEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKR AQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAA AEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJ DAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAA AACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBM ZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAA AACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBk IgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAA AACAZCIDAAAAAJCeAAMAWd0Gn9+WHd4AAAAASUVORK5CYII="
          />
        </g>
        <path
          d="M247 261c-5.5 0-10 4.5-10 10v179h1475c5.5 0 10-4.5 10-10V261H247z"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#54447b",
          }}
          id="Rectangle_1"
        />
        <text
          transform="translate(600.486 340.22)"
          className="st2 st3 st4"
          id="_x33_3_-_M.John"
        >
          {`${homeTeam?.batter?.number} - ${homeTeam?.batter?.name.toUpperCase()}`}
        </text>
        <text
          transform="translate(906.25 337.53)"
          className="st2 st3 st5"
          id="_x28_30_x29_"
        >
          {/* {"(30)"} */}
        </text>
        <text
          transform="translate(1465.25 337.53)"
          className="st2 st3 st5"
          id="_x28_17_x29_"
        >
          {/* {"(17)"} */}
        </text>
        <g id="Armed_x5F_forces_x5F_red_x5F_triangle_xA0_Image_1_">
          <image
            style={{
              overflow: "visible",
            }}
            width={37}
            height={44}
            id="Armed_x5F_forces_x5F_red_x5F_triangle_xA0_Image"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAsCAYAAADikXHLAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAedJREFUeNrMmE0o5VEYhxkyY3zt rqJmigXSSN2UscDCbCaLqywUpdgxviJKXQtlSjaThYVSlDI108wtHwvXglkMdRORMEVRo9j5qEkh z6lzSpI0uPf3q2f/9J7zf9/3/KOOfL4EeBElFCNTAMuIvVeSMsmH34iNQqqKlEst/EGsBWJVpEyS 4QusIlaiIuWSC/OITUC6ipRLFWwh1glxKlImidAPa4h9UJFyyYJZxH7AWxUplwrYRMwPr1SkTOKh FzYQK1eRcsmAScSmIVNFyuWjrVofvFaRMnkJ3fa+VapIubyBb4gFIVtFyqUM1hEbgCQVKRMz2Dvs VKiGaAUplzQYt/P0nYqUSzGsIDYIKSpSJjHQZHe3uttHGund3AMjduv13ryECimEEGLDps9JvWLU KrUEnzyBwLLCnTqCeihyQpGs1CUMgR+ZY4Xj+2WPal2heR5ADZTeJxSuSl3Yd2QvMqcKX9+c6dzI bCm0hH1oR+a7wpJ3Dp8h53+FnrpSM9CMzI5CR9+FFmSmFJ5Y/6DH/Ah5SqHHVOontCGzpzCQt+0n HlT4wXEGXZD33EIPrdRX8xpB5q/CPrUBjcgshHti33V8J9AK+ZEQuqtSY+buIHOosA6vQgMyiyo7 egi8CF2pPByuBRgAgNSnwI2D9woAAAAASUVORK5CYII="
            transform="translate(548 299)"
          />
        </g>
        <text
          transform="translate(1178.485 340.22)"
          className="st2 st3 st4"
          id="_x31_0_-_S.Noah"
        >
          {`${awayTeam?.bowler?.number} - ${awayTeam?.bowler?.name?.toUpperCase()}`}
        </text>
        <path
          d="M237 335v73h181c5.5 0 10-4.5 10-10v-63H237z"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#94dd4d",
          }}
          id="Rectangle_4"
        />
        <text
          transform="translate(243.431 382.517)"
          className="st2 st3"
          style={{
            fontSize: 24,
          }}
          id="OVERS"
        >
          {"OVERS"}
        </text>
        <text
          transform="translate(344.91 384.018)"
          className="st3 st5"
          style={{
            fill: "#54447b",
          }}
          id="_x39_.3"
        >
          {overs}
        </text>
        <g id="Rectangle_3_2_" className="st0">
          <defs>
            <path
              id="SVGID_3_"
              className="st0"
              d="M247 261c-5.5 0-10 4.5-10 10v64h246c5.5 0 10-4.5 10-10v-64H247z"
            />
          </defs>
          <clipPath id="SVGID_4_">
            <use
              xlinkHref="#SVGID_3_"
              style={{
                overflow: "visible",
              }}
            />
          </clipPath>
          <image
            style={{
              overflow: "visible",
              clipPath: "url(#SVGID_4_)",
            }}
            width={1900}
            height={658}
            id="Rectangle_3_xA0_Image"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB2wAAAKSCAIAAACROLxZAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAE7lJREFUeNrs2EEBABAAwEBk0/8v DQWswV2EPTfv2QMAAAAAAH6WBAAAAAAAFBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKR AQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAA AEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJ DAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAA AACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBM ZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAA AACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBk IgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAA AACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAk ExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAA AAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAg mcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYA AAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAA yUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIA AAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAA SCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEB AAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAA QDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokM AAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAA AJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExk AAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAA AJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQi AwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAA AIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQT GQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAA AAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZ yAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAA AAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJ RAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAA AAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABI JjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEA AAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABA MpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwA AAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAA kokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQA AAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAA kExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCID AAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAA gGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZ AAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAA ACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnI AAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAA ACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlE BgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAA AADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgm MgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAA AABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAy kQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAA AABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACS iQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAA AAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQ TGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMA AAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACA ZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkA AAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAA JBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgA AAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAA IJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQG AAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAA AMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYy AAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAA AEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKR AQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAA AEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJ DAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAA AACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBM ZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAA AACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBk IgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAA AACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAk ExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAA AAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAg mcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYA AAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAA yUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIA AAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAA SCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEB AAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAA QDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokM AAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAA AJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExk AAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAA AJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQi AwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAA AIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQT GQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAA AAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZ yAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAA AAAgmcgAAAAAAKQnwAALQwdA6q7IrQAAAABJRU5ErkJggg=="
          />
        </g>
        <g id="Rectangle_3_copie_2_" className="st0">
          <defs>
            <path
              id="SVGID_5_"
              className="st0"
              d="M1476 376c-5.5 0-10 4.5-10 10v64h246c5.5 0 10-4.5 10-10v-64h-246z"
            />
          </defs>
          <clipPath id="SVGID_6_">
            <use
              xlinkHref="#SVGID_5_"
              style={{
                overflow: "visible",
              }}
            />
          </clipPath>
          <image
            style={{
              overflow: "visible",
              clipPath: "url(#SVGID_6_)",
            }}
            width={1900}
            height={658}
            id="Rectangle_3_copie_xA0_Image"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB2wAAAKSCAIAAACROLxZAAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAE7lJREFUeNrs2EEBABAAwEBk0/8v DQWswV2EPTfv2QMAAAAAAH6WBAAAAAAAFBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKR AQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAA AEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJ DAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAA AACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBM ZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAA AACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBk IgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAA AACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAk ExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAA AAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAg mcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYA AAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAA yUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIA AAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAA SCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEB AAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAA QDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokM AAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAA AJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExk AAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAA AJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQi AwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAA AIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQT GQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAA AAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZ yAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAA AAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJ RAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAA AAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABI JjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEA AAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABA MpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwA AAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAA kokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQA AAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAA kExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCID AAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAA gGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZ AAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAA ACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnI AAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAA ACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlE BgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAA AADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgm MgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAA AABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAy kQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAA AABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACS iQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAA AAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQ TGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMA AAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACA ZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkA AAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAA JBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgA AAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAA IJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQG AAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAA AMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYy AAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAA AEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKR AQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAA AEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJ DAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAA AACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBM ZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAA AACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBk IgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAA AACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAk ExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAA AAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAg mcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYA AAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAA yUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIA AAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAA SCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEB AAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAA QDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAAAJBMZAAAAAAAkokM AAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQiAwAAAACQTGQAAAAA AJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAAAIBkIgMAAAAAkExk AAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQTGQAAAACAZCIDAAAA AJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAAAAAkExkAAAAAgGQi AwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZyAAAAAAAJBMZAAAA AIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAAAAAgmcgAAAAAACQT GQAAAACAZCIDAAAAAJBMZAAAAAAAkokMAAAAAEAykQEAAAAASCYyAAAAAADJRAYAAAAAIJnIAAAA AAAkExkAAAAAgGQiAwAAAACQTGQAAAAAAJKJDAAAAABAMpEBAAAAAEgmMgAAAAAAyUQGAAAAACCZ yAAAAAAAJBMZAAAAAIBkIgMAAAAAkExkAAAAAACSiQwAAAAAQDKRAQAAAABIJjIAAAAAAMlEBgAA AAAgmcgAAAAAAKQnwAALQwdA6q7IrQAAAABJRU5ErkJggg=="
          />
        </g>
        <g id="RUN_TO_WIN">
          <path
            d="M1512 387h246v64c0 5.5-4.5 10-10 10h-246v-64c0-5.5 10-10 10-10z"
            style={{
              fill: "none",
            }}
          />
          <text transform="translate(1505.878 407.97)" className="st2 st3 st5">
            {"RUN TO WIN"}
          </text>
        </g>
        <text transform="translate(1575 441)" className="st2 st3 st5" id="_x33_5">
          {homeTeam.runsToWin}
        </text>
        <text
          transform="translate(245.435 310.048)"
          className="st2 st3 st10"
          id="USA"
        >
          {/* {team} */}
        </text>
        <text
          transform="translate(377.435 311.048)"
          className="st2 st3 st10"
          id="_x31_14_-_7"
        >
          {`${homeTeam.runs} - ${homeTeam.penalties}`}
        </text>

        {runs.map((e, i) => {
          return <>
            <g id={`Calque_3_copie_${7 + i}_xA0_Image_1_`}>
              <image
                style={{
                  overflow: "visible",
                  marginLeft: "200px",
                  zIndex: '-99!important'
                }}
                width={46}
                height={46}
                id={`Calque_3_copie_${7 + i}_xA0_Image`}
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsVJREFUeNrsmktoE0EYgCdTasBD RdCDBUEQBUHQizefIBSrrUpRg6igSMXHRbSHQg8KYtWDXrQnS9GDBx+olNB689GKKCqKJ7FqFKz1 DVZsRaLfb8ayrAnJ7qbZGfCHj58m2c63k9mdf2eSUBHi5EDDXFItrIdFMBUmQML30Sx8gwG4CHcg s2dm95uwbSdCyFaRNsJyWAM1Idt+DJchzQncG1dxpFOknbBYlS+G4Cq0cwIvyyqO8GzSQdgQ5lsq Md6aNro4gdHI4kivInXAdFWZuATNyH8KLY50M+kETFSVjduwCfkXgcWRbiEdU/HFE2hC/mnJ4khv JZ0GreKNh1CH/Pui4kjXky7EMDwKxTVYi/x374vaJz2LdMoiaYk6OOJ/0T8U2mCGsi+20anL8g4V 3mgwE0FC2Rk3ZaZmyHwe63Gkk6S9FksrM1sv8Q+VlbBQ2R+tdHK1V1wugGoHxBfAvD9j3NxJ+k1J 6kJ0wT5tahBXpCXmwxRtxrdLIbfrRm3Gt0sxGVaI+DTlXtSKeNJB8aS2oAIME9pF6bxF1n/xSohn HfTOiviog+IjIj7ooPigiPc6Ji3rLWkRTzsmnoFuEX8N7xwSlyWLD5pnuGcqt2rqQvyCDpy/aM/a xQ8HxO/CI+8EJOO8zwHxw/T2zzFx/pDePm75ZHQdbv0z5SMvvX7WUumvcODvmkq+WuUQPLdQvBPp GwWLLN6UzaXdKrfRZEv0QGvR6hD5XiNvw3i/D5txGimprOWDZ0j7Y5aWXbkULh8D1eMcIFso22E4 Bmm5ezSayTH4gwQHdqrc5mumgtLnYTVtZyI9AfEP5OKQzdhz4zzupbzeAVu8t71CEXSDdh1pFywt s/AVOFqsl0OLG3k5JmW+hSaYFKHKkz3NHoQfBD040kI+JzFH5VbC5DqQhfdSfoQgG2PyI4RXCA+F bfu3AAMAkt++pvHJF04AAAAASUVORK5CYII="
                transform={`translate(${546 + ((i - 1) * 61)} ${i <= 3 ? 389 : 389 + ((i - 3) * 1)})`}
              />
            </g>
            <text
              transform={`matrix(.9906 0 0 1 ${500.812 + (i * 61)} 421.232)`}
              style={{ zIndex: "99!important", fontWeight: 'bolder', fontSize: '25px' }}
              className="st2 st3 st11"
              id="_x31__1_"
            >
              {e}
            </text>
          </>
        })
        }
      </svg>
    </div>
  )
}


{ }