import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className='blog-content'>
                <h2>What is purpuse of react router?</h2>
                <p>React Router is a standard library for routing in React. It enables the navigation <br />
                    among views of various components in a React Application,<br />
                    allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='blog-content'>
                <h2>How does CONTEXT API work?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables <br />
                    that can be passed around. This is the alternative to "prop drilling" or moving props <br />
                    from grandparent to child to parent, and so on. Context is also touted as an easier, <br />
                    lighter approach to state management using Redux.</p>
            </div>
            <div className='blog-content'>
                <h2>How does work UseRef?</h2>
                <p>What does useEffect do? By using this Hook, you tell React that your component needs to do <br />
                    something after render. React will remember the function you passed (we'll refer <br />
                    to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default Blog;