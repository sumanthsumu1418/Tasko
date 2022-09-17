// /**
//  * Generated from
//  * https://github.com/osamaq/react-native-template-osamaq
//  *
//  */
// import * as Sentry from '@sentry/react-native';
// import React from 'react';
// import {Platform, UIManager} from 'react-native';
// import BuildConfig from 'react-native-config';
// import {enableScreens} from 'react-native-screens';
// import {Provider} from 'react-redux';
// // import reactotron from './reactotron';
// import RootErrorBoundary from './src/features/error-boundary/RootErrorBoundary';
// import Navigator from './src/features/navigation/Navigator';
// // import {makeMirage} from './src/services/network/mock/mirage';
// import {PortalProvider} from './src/common/contexts/PortalContext';
// import store from './src/redux/store';
// (function setup() {
//   // Log environement variables
//   console.log(BuildConfig);

//   // React Navigation, optimize memory usage.
//   enableScreens();

//   // Initialize sentry SDK (DSN string must be inserted in BuildConfig environment files).
//   // const {SENTRY_DSN} = BuildConfig;

//   // if (typeof SENTRY_DSN === 'string' && SENTRY_DSN.length > 0) {
//   //   Sentry.init({
//   //     dsn: SENTRY_DSN,
//   //   });
//   // }

//   // Layout animation
//   if (Platform.OS === 'android') {
//     if (UIManager.setLayoutAnimationEnabledExperimental) {
//       UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
//   }

//   // Mirage – API Mocking
//   // if (BuildConfig.MOCK_EXAMPLE_API === 'YES') {
//   //   makeMirage();
//   //   __DEV__ && console.log('Mirage Configured');
//   // }
// })();

// const App = () => {
//   return (
//     <RootErrorBoundary>
//       <Provider store={store}>
//         <PortalProvider>
//           <Navigator />
//         </PortalProvider>
//       </Provider>
//     </RootErrorBoundary>
//   );
// };

// // const AppWithOverlay = __DEV__ ? reactotron.overlay(App) : App;

// export default App;

import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './src/components/AssetExample';
import axios from 'axios';
let url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

// import callApri from './servies/apiget'

// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';
import {useEffect, useState} from 'react';

export default function App() {
  const [mealData, setMealDate] = useState('');
  const callApri = () => {
    axios
      .get(url)
      .then(response => {
        console.log(response?.data);
        setMealDate(response?.data?.meals);
        console.log(response?.data?.meals);
        // return response;
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    callApri();

    // return () => {
    //   callApri();
    // };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
      </Text>
      <Card>
        <AssetExample data={mealData} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
