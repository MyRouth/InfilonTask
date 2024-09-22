import React from 'react';
import { fetchUsers } from '../redux/actions'; 
import { useDispatch } from 'react-redux';

interface Tab2Props {
  onNavigateToTab3: () => void; 
}

const Tab2: React.FC<Tab2Props> = ({ onNavigateToTab3 }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(fetchUsers()); 
    onNavigateToTab3(); 
  };

  return (
    <div>
      <h2>Tab 2</h2>
      <button onClick={handleButtonClick}>Load Users and Go to Tab 3</button>
    </div>
  );
};

export default Tab2;
