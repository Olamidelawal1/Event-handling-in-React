import React from 'react';
import ReactDOM from 'react-dom/client';
import FilteredProfiles from './Components/FilteredProfiles';
import ProfileList from './Components/ProfileList';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ProfileList/>
  <FilteredProfiles/>
  </React.StrictMode>
);

