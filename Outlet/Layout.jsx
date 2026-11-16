import Nav from '../src/-component/Nav'
import Footer from '../src/-component/Footer'
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
