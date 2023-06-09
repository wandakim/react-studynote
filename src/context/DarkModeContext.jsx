import { createContext, useState } from 'react';

/* 
모든 컴토넌트가 프롭을 이용해서 전달하는 것은 비효율적이다.
어플리케이션 전반적으로 쓰이는 언어, 테마, 로그인 정보 등의 데이터를 공유할 때 유용한 것이 Context이다.
*/

/* 다크모드인지 아닌지를 기억하는 컨텍스트를 만들어 보자. */

export const DarkModeContext = createContext(); // 필요한 데이터를 간직한다.

export function DarkModeProvider({ children }) {
  // Context를 만들 때는 Provider도 같이 만들어 준다. 우산을 만든다. 자식 컴포넌트를 받아오는 컴포넌트
  const [darkMode, setDarkMode] = useState(false); // 글로벌하게 기억하고 처리해줄 것을 만들어 준다.
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    // 자식 컴포넌트와 공유하고 싶은 데이터는 value로 전달한다.
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider> // 자식 컴포넌트를 프로바이더로 감싸준다.
  );
}
