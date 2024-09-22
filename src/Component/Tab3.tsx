import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Tab3: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [messages, setMessages] = useState<string[]>([]);
  const users = useSelector((state: any) => state.users);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  const recursivePrint = (n: number) => {
    if (n > 0) {
      setMessages((prev) => [...prev, 'Hello Task']);
      recursivePrint(n - 1);
    } else {
      setMessages((prev) => [...prev, 'STOP']); 
    }
  };

  const handleExecuteTask = () => {
    setMessages([]);
    recursivePrint(count); 
  };

  return (
    <div>
      <h2>Tab 3</h2>
      <input
        type="number"
        value={count}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={handleExecuteTask}>Execute Task</button>
      <h3>Messages:</h3>
      <ul>
        {messages.length === 0 ? (
          <li>No messages yet. Execute the task to see results.</li>
        ) : (
          messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))
        )}
      </ul>
      <h3>User List:</h3>
      <ul>
        {users.length === 0 ? (
          <li>No users available. Please fetch users from Tab 2.</li>
        ) : (
          users.map((user: any) => (
            <li key={user.id}>
              {user.first_name} {user.last_name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Tab3;
