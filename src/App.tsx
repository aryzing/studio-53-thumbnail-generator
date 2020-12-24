import { FC, useRef, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import saveSvgAsPng from "save-svg-as-png";

import { Logo } from "./converted";

export const App: FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const [topText, setTopText] = useState("");
  const [middleText, setMiddleText] = useState("");

  const [topTextVerticalPosition, setTopTextVerticalPosition] = useState(20);
  const [topTextSize, setTopTextSize] = useState(42);
  const [topTextColor, setTopTextColor] = useState("#888");

  const [midTextVerticalPosition, setMidTextVerticalPosition] = useState(50);
  const [middleTextSize, setMiddleTextSize] = useState(30);
  const [middleTextColor, setMiddleTextColor] = useState("#000");

  const [bgColor, setBgColor] = useState("#ffffff");
  const [colorTopText, setColorTopText] = useState("#777777");
  const [colorMidText, setColorMidText] = useState("#000000");

  const handleDownloadClick = () => {
    if (!svgRef.current) {
      console.error("Expected to have a reference to svg element.");
      return;
    }

    saveSvgAsPng.saveSvgAsPng(svgRef.current, "logo.png");
  };

  return (
    <Box margin={["1rem"]}>
      <Heading marginBottom="2rem">Studio 53 Thumbnail Generator</Heading>
      <Stack>
        <Box>
          <Text>
            Background color{" "}
            <input
              value={bgColor}
              type="color"
              onChange={(e) => {
                setBgColor(e.target.value);
              }}
            ></input>
          </Text>
        </Box>
        <Box>
          <Input
            value={topText}
            onChange={(e) => {
              setTopText(e.target.value);
            }}
            placeholder="Top text"
          ></Input>
          <Button
            onClick={() => {
              setTopTextVerticalPosition(topTextVerticalPosition - 1);
            }}
          >
            Up
          </Button>
          <Button
            onClick={() => {
              setTopTextVerticalPosition(topTextVerticalPosition + 1);
            }}
          >
            Down
          </Button>
          <Button
            onClick={() => {
              setTopTextSize(topTextSize + 1);
            }}
          >
            Bigger
          </Button>
          <Button
            onClick={() => {
              setTopTextSize(topTextSize - 1);
            }}
          >
            Smaller
          </Button>
          <input
            value={colorTopText}
            type="color"
            onChange={(e) => {
              setColorTopText(e.target.value);
            }}
          ></input>
        </Box>
        <Box>
          <Input
            value={middleText}
            onChange={(e) => {
              setMiddleText(e.target.value);
            }}
            placeholder="Middle text"
          ></Input>
          <Button
            onClick={() => {
              setMidTextVerticalPosition(midTextVerticalPosition - 1);
            }}
          >
            Up
          </Button>
          <Button
            onClick={() => {
              setMidTextVerticalPosition(midTextVerticalPosition + 1);
            }}
          >
            Down
          </Button>
          <Button
            onClick={() => {
              setMiddleTextSize(middleTextSize + 1);
            }}
          >
            Bigger
          </Button>
          <Button
            onClick={() => {
              setMiddleTextSize(middleTextSize - 1);
            }}
          >
            Smaller
          </Button>
          <input
            value={colorMidText}
            type="color"
            onChange={(e) => {
              setColorMidText(e.target.value);
            }}
          ></input>
        </Box>
        <Box>
          <Center>
            <svg
              ref={svgRef}
              width="500"
              height="500"
              style={{ border: "1px solid black", backgroundColor: bgColor }}
            >
              <text
                x="50%"
                y={`${String(topTextVerticalPosition)}%`}
                dominantBaseline="middle"
                textAnchor="middle"
                style={{
                  fill: topTextColor,
                  fontSize: `${String(topTextSize)}px`,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {topText}
              </text>
              <text
                x="50%"
                y={`${String(midTextVerticalPosition)}%`}
                dominantBaseline="middle"
                textAnchor="middle"
                style={{
                  fill: middleTextColor,
                  fontSize: `${String(middleTextSize)}px`,
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                {middleText}
              </text>
              <Logo height="200" width="200" x="150" y="275"></Logo>
            </svg>
          </Center>
        </Box>
        <Center>
          <Button onClick={handleDownloadClick}>Download</Button>
        </Center>
      </Stack>
    </Box>
  );
};
