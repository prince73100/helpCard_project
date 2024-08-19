1. # How can you implement shared functionality across a component tree?

*  Lifting State Up -> is simple and works well for smaller applications.

* Context API -> is great for larger applications where state or functionality needs to be shared across deeply nested components.

* Custom Hooks -> are ideal for sharing logic that doesn’t necessarily involve state.

* HOCs and Render Props -> are more advanced patterns but are powerful for reusable functionality in larger applications.

* React redux toolkit -> is a advanced state management tookit and passing data in very deeply.


2. # Why is the useState hook appropriate for handling state in a complex component?

* The useState hook is ideal for handling state in a complex component because it offers simplicity, allowing you to easily declare and manage multiple state variables independently.It ensures predictable state updates, encapsulates state logic within the component, and integrates well with other hooks like useEffect for side effects.


3. In this project we use react vite app.
* first   run npm install for install node_module and then ,
for run type -> npm run dev
