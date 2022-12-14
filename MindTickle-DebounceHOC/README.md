 We have a App.js file in which we have set an interval to update the count evry 50ms.
 Now we dont want to rerender the Counter component every 50ms , so we want a debounced function that returns an HOC which will allow rerendering of the Counter only if there is a  delay of 100 ms between props change .
 Implement a Debounced like HOC which will help performin this functionality.

 HINT -> Will  use shuould Component and forceUpdate

 shouldComponentUpdate can be used to decide whether the component should render or not so we return false evry time as we dont want to update the component for so frequently changing props

 We have debounced the forceUpdate here which will be called only once the given delay between the prop change is achieved 

 forceUpdate -> skips the shouldComonentUpdate and renders the component with the current props