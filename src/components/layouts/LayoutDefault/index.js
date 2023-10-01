import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './LayoutDefault.scss'
import Header from '../../Header';


function LayoutDefault() {
   // const authen = useSelector(state => state.authenReducer);
   // console.log(authen);

   return (

      <>
         <Header />

         <main className='main'>
            <Outlet />
         </main>

         <footer className='footer'>
            Copyright @ 2023 by 28techs
         </footer>
      </>
   )
}

export default LayoutDefault;