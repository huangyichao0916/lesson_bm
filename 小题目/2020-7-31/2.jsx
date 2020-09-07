import React from 'react';

const chapterTree = {
  name: '总章节',
  children: 
  [
      {
          name: '章节一', 
          children:
              [
                  {
                      name: '第一节', children:
                          [
                              {
                                  name: '第一小节'
                              },
                              {
                                  name: '第二小节'
                              }
                          ]
                  },
                  {
                      name: '第二节'
                  }
              ]
      },
      {
          name: '章节二',
          children:
              [
                  {
                      name: '第三节'
                  },
                  {
                      name: '第四节'
                  }
              ]
      }
  ]
};

const helper = node => {
  return(
    <ul>
      <li >{node.name}</li>
      {
        node.children &&
        node.children.map(child => {
          return helper(child);
        }) 
      }
    </ul>
  )
}

function App() {
  return (
    <div>
      {
        helper(chapterTree)
      }
    </div>
  );
}

export default App;
