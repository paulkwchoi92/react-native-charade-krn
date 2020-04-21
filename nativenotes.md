Foundational Components

<View> = <div>
<Text> = <h1- 6>, <p>, etc
<Textinput> = <input />
<TouchableHighlight/> = <button>, etc

Flex
flex will define how your items are going to “fill” over the available space along your main axis. Space will be divided according to each element's flex property.

In the following example, the red, yellow, and green views are all children in the container view that has flex: 1 set. The red view uses flex: 1 , the yellow view uses flex: 2, and the green view uses flex: 3 . 1+2+3 = 6, which means that the red view will get 1/6 of the space, the yellow 2/6 of the space, and the green 3/6 of the space.




Flex Direction
flexDirection controls the direction in which the children of a node are laid out. This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in.

row Align children from left to right. If wrapping is enabled, then the next line will start under the first item on the left of the container.

column (default value) Align children from top to bottom. If wrapping is enabled, then the next line will start to the right of the first item on the top of the container.

row-reverse Align children from right to left. If wrapping is enabled, then the next line will start under the first item on the right of the container.

column-reverse Align children from bottom to top. If wrapping is enabled, then the next line will start to the right of the first item on the bottom of the container.


Align Items
alignItems describes how to align children along the cross axis of their container. Align items is very similar to justifyContent but instead of applying to the main axis, alignItems applies to the cross axis.

stretch (default value) Stretch children of a container to match the height of the container's cross axis.

flex-start Align children of a container to the start of the container's cross axis.

flex-end Align children of a container to the end of the container's cross axis.

center Align children of a container in the center of the container's cross axis.

baseline Align children of a container along a common baseline. Individual children can be set to be the reference baseline for their parents.