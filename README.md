# An iOS React native mobile app 
> based on the tutorial
https://designcode.io/react-native-for-designers

____________

## Installed via npm

**Expo CLI**

`npm install -g expo-cli`

`npm add expo`

**Styled components**

`npm install -s styled-components`

**SVG**

`npm install react-native-svg`

**Safe area context**

> a wrapper zone that sits outside of the Notch and Home indicator area

`npm install react-native-safe-area-context`

*updated with* 

`yarn add react-native-safe-area-view react-native-safe-area-context`

and in code: `import SafeAreaView from 'react-native-safe-area-view';`

**Redux**

`npm install --save redux@4.0.1`

**React Redux**

`npm install --save react-redux@6.0.0`

**React Navigation**

```js
npm install --save react-navigation

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install react-navigation-stack

npm install react-navigation-tabs
```

**Apollo & GraphQL**

```js
npm install apollo-boost react-apollo graphql --save
```

**React native WebView**

`npm install --save react-native-webview`

**Markdown**

```js
npm install --save react-native-showdown
```
_______________

Tutorial steps
_______________

## 1. Project setup
- Android Studio --> Installed, not config
- VisualStudio
- Connect to Git
- VS Extensions: Prettier, GraphQL, Styled components
- Invision Studio
- Add styled-components lib

## 2. Title & Cards
- Custom UI Card with flexbox and styling
- Linked, styled component in App.js
- Component with props
- ScrollView with props
- SafeAreaView -wrapper
- Ionicons.com -icons
- Dynamic width via flex ScrollView
- Custom SVG icons
- SVG to ReactNative

## 3. Data & Loops
- Data array, loop and map()
- Edit content from the data array
- Customized cards with static data
- Fix scrolling
- Build a card with data arrays from scratch

## 4. States, Animations
- Animated -library
- Look into React states
- Set a simple “spring” animation to reveal a z-positoned container
- Import and use TouchableOpacity on an styled Ionicons x-icon
- Add “onPress” event to TouchableOpacity -closing button
- Animate TouchableOpacity button with “toggleMenu”
- Use Dimension for referencing screenHeight
- Build a custom menu with data arrays and styling

## 5. Redux, states and more complex animations
- Install redux and react-redux
- Watch an intro about Redux https://www.youtube.com/watch?v=CVpUuw9XSjY
- Create simple open and close states for a menu
- Apply open and close states to a menu spring animation
- Add open menu -action via TouchOpacity to the avatar
- Set up basic animation syncing across components
- Create an animation that resizes the underlying view while menu slides up
- Fine-tune underlying view to have a 0.5 opacity
- Show light status-bar on menu-animation, and dark status bar by default

## 6. API
- Set up Avatar component for API
- API Call via ComponentDidMount(), “fetch” and https://uifaces.co/api-docs
- Add API key for authentication
- Fix outside-tutorial-bug: set Animated value to useNativeDriver: false

## 7.Screens, Nav, Passing Data
- Create a stack navigation with createStackNavigator and createAppContainer
- Get familiar with the documentation on stackNavigator and tabNavigator
- Test out card and model -methods: card (default), modal
- Hide native navigation header with headerShown: false
- Create a tab navigation with createBottomTabNavigator
- Hide tab navigation on certain modal screens with 
`const routeName = navigation.state.routes[navigation.state.index].routeName; and tabBarVisible = false;`
- Create two new screens and link to the tab bar
- Using navigator show data in another screen from the mapped cards
- Use TouchOpacity on an icon to create a closing button
- Hide status bar with <StatusBar hidden />

## 8. Contentful, Apollo and GraphQL
- Create a dummy Contentful account
- Create a dummy “Card” type with variables title, logo, caption, subtitle and image
- Install apollo-boost, react-apollo and graphql
- Import libraries from ApolloClient and ApolloNavigator
- Authorize API
- import gql from "graphql-tag”; on the screen where the data is needed
- Fetch “Card” data via const CardsQuery = gql
- Use GraphiQL -test site to copy a data list available for “Cards” component
- Within a new container, add a data loop with {data.cardsCollection.items.map((card, index) => ( … ))}, to apply Contentful data to the card
- Specify error and loading -messages

## HTML WebView and Markdown
- Install web-view library from npm install --save react-native-webview
- Remove scrolling
- Create CSS styles for WebView’s html content
- Render basic text, image and links within a web view
- Open links in a browser onNavigationStateChange with Linking -component
- Switch WebView to markdown with npm install --save react-native-showdown
