/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';

export function MeasuredView(props: {label: string}) {
  const ref = useRef<View>(null);
  const [measure, setMeasure] = useState<string>('');
  const [measureInWindow, setMeasureInWindow] = useState<string>('');
  const [onLayoutOutput, setOnLayoutOutput] = useState<string>('');
  useLayoutEffect(() => {
    ref.current?.measure(
      (
        x: number,
        y: number,
        width: number,
        height: number,
        pageX: number,
        pageY: number,
      ) => {
        setMeasure(
          `(${x}, ${y}) / ${width} x ${height}; \n  page=(${pageX}, ${pageY})`,
        );
      },
    );
  }, []);
  useLayoutEffect(() => {
    ref.current?.measureInWindow(
      (x: number, y: number, width: number, height: number) => {
        setMeasureInWindow(`(${x}, ${y}) / ${width} x ${height};})`);
      },
    );
  }, []);
  return (
    <View
      ref={ref}
      style={{width: '100%', backgroundColor: '#ffcccc'}}
      onLayout={e => {
        setOnLayoutOutput(JSON.stringify(e.nativeEvent.layout));
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.label}:</Text>
      <Text>Measure: {measure}</Text>
      <Text>measureInWindow: {measureInWindow}</Text>
      <Text>onLayout: {onLayoutOutput}</Text>
    </View>
  );
}
