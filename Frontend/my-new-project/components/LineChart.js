import React, { useState, useRef } from "react";
import { Dimensions, PanResponder } from "react-native";
import Svg, { G, Line, Text as SvgText, Circle } from "react-native-svg";
import { useTheme } from "../hooks/ThemeContext";

const { width } = Dimensions.get("window");
const height = 200;
const padding = 20;

const LineChart = ({ data }) => {
  const { isDarkTheme } = useTheme();
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: (evt, gestureState) => {
        if (evt.nativeEvent.touches.length === 2) {
          // Pinch to zoom
          const [touch1, touch2] = evt.nativeEvent.touches;
          const distance = Math.sqrt(
            Math.pow(touch1.pageX - touch2.pageX, 2) +
              Math.pow(touch1.pageY - touch2.pageY, 2)
          );
          const newScale = distance / 200;
          setScale(newScale > 1 ? newScale : 1);
        } else if (evt.nativeEvent.touches.length === 1) {
          // Pan to move
          setTranslateX(gestureState.dx);
        }
      },
      onPanResponderRelease: () => {
        // Set the final translateX after the pan ends
        setTranslateX((prevTranslateX) => prevTranslateX + translateX);
      },
    })
  ).current;

  if (data.length === 0) {
    return null;
  }

  const maxValue = Math.max(...data.map((d) => d.close));
  const minValue = Math.min(...data.map((d) => d.close));
  const xScale = (width - padding * 2) / (data.length - 1);
  const yScale = (height - padding * 2) / (maxValue - minValue);

  return (
    <Svg
      height={height}
      width={width}
      {...panResponder.panHandlers}
      viewBox={`${-translateX} 0 ${width} ${height}`}
    >
      <G scale={scale} origin={`${width / 2}, ${height / 2}`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Line
            key={`grid-line-${index}`}
            x1={padding}
            y1={padding + (index * (height - padding * 2)) / 4}
            x2={width - padding}
            y2={padding + (index * (height - padding * 2)) / 4}
            stroke={isDarkTheme ? "#555" : "#e0e0e0"}
            strokeWidth={1}
          />
        ))}
        {data.map((point, index) => {
          if (index === 0) return null;
          const previousPoint = data[index - 1];
          const x1 = padding + (index - 1) * xScale;
          const y1 =
            height - padding - (previousPoint.close - minValue) * yScale;
          const x2 = padding + index * xScale;
          const y2 = height - padding - (point.close - minValue) * yScale;

          return (
            <G key={`line-${index}`}>
              <Line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgb(134, 65, 244)"
                strokeWidth={2}
              />
              <Circle cx={x2} cy={y2} r={3} fill="rgb(134, 65, 244)" />
              <SvgText
                x={x2}
                y={y2 - 10}
                fontSize="10"
                fill={isDarkTheme ? "#fff" : "#000"}
                alignmentBaseline="middle"
                textAnchor="middle"
              >
                {point.close.toFixed(2)}
              </SvgText>
            </G>
          );
        })}
        {Array.from({ length: 5 }).map((_, index) => (
          <SvgText
            key={`y-axis-label-${index}`}
            x={padding - 10}
            y={padding + (index * (height - padding * 2)) / 4}
            fontSize="10"
            fill={isDarkTheme ? "#fff" : "#000"}
            alignmentBaseline="middle"
            textAnchor="end"
          >
            {(((maxValue - minValue) * (4 - index)) / 4 + minValue).toFixed(2)}
          </SvgText>
        ))}
        {data.map((point, index) => {
          if (index % Math.floor(data.length / 4) === 0) {
            const x = padding + index * xScale;
            return (
              <SvgText
                key={`x-axis-label-${index}`}
                x={x}
                y={height - padding + 10}
                fontSize="10"
                fill={isDarkTheme ? "#fff" : "#000"}
                alignmentBaseline="hanging"
                textAnchor="middle"
              >
                {point.date}
              </SvgText>
            );
          }
          return null;
        })}
      </G>
    </Svg>
  );
};

export default LineChart;
