import Nav from '../-component/Nav'
import Footer from '../-component/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return <>
  <Nav/>
<main>
<Outlet/>
</main>
  <Footer/>

  </>
}
export default Layout
