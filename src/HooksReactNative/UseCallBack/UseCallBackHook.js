import React, {useState, useEffect, useCallback} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);

  const fetchData = useCallback(()=>{
    console.log("fetching data...")
  },[])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Count: {count}</Text>
      <Button onPress={() => setCount(count + 1)} title="Increment" />
    </SafeAreaView>
  );
};

export default UseCallBackHook