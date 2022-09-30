import React from 'react';
import './Blog.css'


const Blog = () => {
    return (
        <div className='blog'>
            <div className="blog-head">
                <h1> Blogs</h1>
            </div>            

            <div className='blog-one'>
                <h4>How Does React Works</h4>
                <p>A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.
                    </p>
            </div>
            
            <div className = 'blog-two' >
                <h4> What is the difference between props and state </h4>
                <p>
                    Props are used to pass data from one component to another.The state is a local data storage that is local to the component only and cannot be passed to other components
             </p>
            </div>
            
            <div className='blog-three'>
                 <h4>What does useEffect do beside data load </h4>
             <p>useEffect hook is a very powerful hook that allows you to handle side effects of state or prop changes as well as creating on-mount functionality similar to componentDidMount in class components.</p>
            </div>
           
        </div>
    );
};

export default Blog;