import TogglePage from "../pages/TogglePage";

const routes = [
  {
    name: 'toggle',
    path: '/components/toggle',
    children: <TogglePage/>
  },
  {
    name: 'button',
    path: '/components/button',
    children: <button>hello</button>
  },
]

export default routes;