import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import App from 'next/app';

const rootElement = document.getElementById('root');

ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,
    rootElement
);

//-----------------------------------------------------------------

// function App() {
//     const data = { /* valid object literal */ }
                  
//     return (
//       <div>
//          <SideBar data={data} />
//          <Content data={data} />
//       </div>
//     )
// }

// const SideBar = ({data}) => <List data={data} />
// const List = ({data}) => <ListItem data={data} />
// const ListItem = ({data}) => <span>{data.listItem}</span>
  
// const Content = ({data}) => (
//     <div>
//         <Header data={data} />
//         <Block data={data} />
//     </div>
// );
  
// const Header = ({data}) => <div>{data.title}</div>
// const Block = ({data}) => <Text data={data} />
// const Text = ({data}) => <h1>{data.text}</h1>

//-----------------------------------------------------------------

const DataContext = React.createContext(); // 데이터를 저장할 컨텍스트 생성

function App() {
    const data = { /* valid object literal */ }
                  
    return ( // 데이터를 컨텍스트에 제공
        <div>
            <DataContext.Provider value={data}> 
                    <SideBar />
                    <Content />
            </DataContext.Provider>
      </div>
    )
}

const SideBar = () => <List />
const List = () => <ListItem />
const Content = () => <div><Header /><Block /></div>

function ListItem() {
  const { data } = React.useContext(DataContext);
  return <span>{data.listItem}</span>;
}

function Text() {
  const { data } = React.useContext(DataContext);
  return <h1>{data.text}</h1>;
}

function Header() {
  const { data } = React.useContext(DataContext);
  return <div>{data.title}</div>;
}
