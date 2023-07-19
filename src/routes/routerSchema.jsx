import { Navigate } from 'react-router-dom';
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import Config from "../config";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { ApplicationLayout } from 'layouts/ApplicationLayout/ApplicationLayout';
import { ApplicationDashboard } from 'components/ApplicationDashboard/ApplicationDashboard';
import { ApplicationBonuses } from 'components/ApplicationBonuses/ApplicationBonuses';

export const routerSchema = [{
  path: `${Config().DEPLOY_URL_PREFIX}/`,
  exact: true,
  title: 'Main',
  element: <MainLayout />,
  children: [{
    index: true,
    element: <LandingPage />,
  }]
}, {
  path: 'app',
  title: 'Application',
  element: <ApplicationLayout />,
  children: [{
    path: 'dashboard',
    element: <ApplicationDashboard />
  }, {
    path: 'bonuses',
    element: <ApplicationBonuses />
  }, {
    index: true,
    exact: true,
    element: <Navigate to={`${Config().DEPLOY_URL_PREFIX}/app/dashboard`} />
  }]
}, {
  path: `${Config().DEPLOY_URL_PREFIX}/*`,
  element: <Navigate to={`${Config().DEPLOY_URL_PREFIX}/`} />
}];
