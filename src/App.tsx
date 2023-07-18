import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import "./app/share/styles/globals.scss";
import "./app/share/styles/background.scss";
import { Background } from './app/components/Background/Background';
import { ThemeButton } from './app/@company/components/ThemeButton/ThemeButton';
import { ChatPanel } from './app/@company/components/Chat/ChatPanel/ChatPanel';
import { NotificationAlert } from './app/components/NotificationAlert/NotificationAlert';
import { useEasy } from 'use-easy';
import { User } from './app/@unsignedin/(pages)/(log)/login/page';


const Loading = () => <div>Loading...</div>;

const CompanyRoutes = Object.freeze({
  FindProfile: lazy(() => import('./app/@company/(pages)/find/profile/page')),
  FindSearch: lazy(() => import('./app/@company/(pages)/find/search/page')),
  FindYourProfiles: lazy(() => import('./app/@company/(pages)/find/your-profiles/page')),
  WatchProfile: lazy(() => import('./app/@company/(pages)/watch/profile/[id]/page')),
  WatchProject: lazy(() => import('./app/@company/(pages)/watch/project/[id]/page')),
})

const ProfessionalsRoutes = Object.freeze({
  Profile: lazy(() => import('./app/@professionals/(pages)/profile/page')),
})

const unsignedinRoutes = Object.freeze({
  Home: lazy(() => import('./app/@unsignedin/(pages)/(home)/page')),
  AcountValidation: lazy(() => import('./app/@unsignedin/(pages)/(log)/acount-validation/page')),
  LogIn: lazy(() => import('./app/@unsignedin/(pages)/(log)/login/page')),
  Register: lazy(() => import('./app/@unsignedin/(pages)/(log)/register/page')),
  RegisterEmail: lazy(() => import('./app/@unsignedin/(pages)/(log)/register-email/page')),
})


const App = () => {
  
  const { state } = useEasy<{ user: User | null }>({ initial: { user: null } })

  const { role } = { role: "UNSIGNEDIN", ...state.user };
  
  return (
    <>
      <Background />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Rutas de la company */}
            <Route path="/find/profile" element={<CompanyRoutes.FindProfile />} />
            <Route path="/find/search" element={<CompanyRoutes.FindSearch />} />
            <Route path="/find/your-profiles" element={<CompanyRoutes.FindYourProfiles />} />
            <Route path="/watch/profile/:id" element={<CompanyRoutes.WatchProfile />} />
            <Route path="/watch/project/:id" element={<CompanyRoutes.WatchProject />} />

            {/* Rutas de los professionals */}
            <Route path="/profile" element={<ProfessionalsRoutes.Profile />} />

            {/* Rutas sin iniciar  */}
            <Route path="/" element={<unsignedinRoutes.Home />} />
            <Route path="/acount-validation" element={<unsignedinRoutes.AcountValidation />} />
            <Route path="/login" element={<unsignedinRoutes.LogIn />} />
            <Route path="/register" element={<unsignedinRoutes.Register />} />
            <Route path="/register-email" element={<unsignedinRoutes.RegisterEmail />} />
          </Routes>
        </Suspense>
      </Router>
      <ThemeButton />
      {role !== 'unsignedin' && <ChatPanel />}
      <NotificationAlert />
    </>
  );
};

export default App;

