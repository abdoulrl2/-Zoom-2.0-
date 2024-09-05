import React from 'react';
import { View, Text } from 'react-native';
import { DailyVideoCall } from '@daily-co/react-native-daily-js';

export default function VideoCall() {
  return (
    <View style={{ flex: 1 }}>
      <DailyVideoCall
        callUrl="https://your-daily-call-url"
        onJoin={() => console.log('Joined call')}
        onLeave={() => console.log('Left call')}
      />
    </View>
  );
}
