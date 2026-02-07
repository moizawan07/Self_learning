// --------------------------------------------------------
//  Tabs Routing perform throught Expo router but he's features are limited  like no hand gesture swipe
// --------------------------------------------------------
// import { Tabs } from "expo-router";
// import Ionicons from "@expo/vector-icons/Ionicons";


// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           paddingBottom: 5,
//           height: 47,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="firstTab"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="secondTab"
//         options={{
//           title: "Cart",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="cart" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }


// --------------------------------------------------------
//  Tabs Routing perform throught npm install react-native-tab-view, npx expo install react-native-pager-view but he's features are good like he give a hand gesture measns swipe navigation also
// --------------------------------------------------------
// import { View, Text, useWindowDimensions, ScrollView } from "react-native";
// import React, { useState } from "react";
// import { SceneMap, TabView, TabBar } from "react-native-tab-view";
// import { Ionicons } from '@expo/vector-icons';
// import FirstTab from "./firstTab";
// import SecondTab from "./secondTab";

// const TabsLayout = () => {
//   const layout = useWindowDimensions();
//   const [index, setIndex] = useState(0);
//   const routes = [
//     { key: "first", title: "First Tab", icon: "home" },
//     { key: "second", title: "Second Tab", icon: "information-circle" },
//   ];
  
//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={SceneMap({
//         first: FirstTab,
//         second: SecondTab,
//       })}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//       tabBarPosition="bottom"
//       renderTabBar={props => (
//         <TabBar
//           {...props}
//           renderIcon={({ route, focused }) => (
//             <Ionicons
//               name={route.icon}
//               size={40}
//               color={focused ? "green" : "gray"}
//             />
//           )}
//           indicatorStyle={{backgroundColor: "orange"}}
//           style={{backgroundColor: "white", borderTopWidth: 1, borderColor: "#ccc"}}
//           labelStyle={{color: "black", fontSize: 12}}
//         />
//       )}
//     ></TabView>
//   );
// };

// export default TabsLayout;

import * as React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Ionicons from "@expo/vector-icons/Ionicons";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: "first", title: "Home", icon: "home" },
    { key: "second", title: "Info", icon: "information-circle" },
  ];

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      tabBarPosition="bottom"
     
    />
  );
}



