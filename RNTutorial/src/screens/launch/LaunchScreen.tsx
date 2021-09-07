import {ScreenName} from 'consts';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {navigationViewModel} from 'shared';

export const LaunchScreen = ({}): JSX.Element => {
  async function loadLocalData(): Promise<void> {
    // for navigation mounted
    await new Promise(resolve => setTimeout(resolve, 20));
    navigationViewModel.resetWithScreen(ScreenName.Onboarding);
    // TODO load data local to load Onboarding or Home
  }

  useEffect(() => {
    loadLocalData();
  }, []);
  return <View style={{flex: 1, backgroundColor: 'red'}} />;
};
