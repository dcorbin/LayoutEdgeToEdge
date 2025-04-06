import {Text, View} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';

export function MeasuredView(props: {label: string}) {
  const ref = useRef<View>(null);
  const [measure, setMeasure] = useState<string>('');
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
          `measure: (${x}, ${y}) / ${width} x ${height}; \n  page=(${pageX}, ${pageY})`,
        );
      },
    );
  }, []);
  return (
    <View
      ref={ref}
      style={{margin: 20, width: '100%', flex: 1, backgroundColor: 'red'}}
      onLayout={e => {
        setOnLayoutOutput(JSON.stringify(e.nativeEvent.layout));
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.label}:</Text>
      <Text>Measure: {measure}</Text>
      <Text>onLayout: {onLayoutOutput}</Text>
    </View>
  );
}
