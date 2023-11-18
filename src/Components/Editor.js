import React, { useState, useRef } from 'react'
import JoditEditor from 'jodit-react';
import Navbarblog from './navbartesting';
import '../styling/editor.css'


const data = [
    {
      id: 1,
      category: 'Politics'
    },
    {
        id: 2,
        category: 'Tech'
    },
    {
        id: 3,
        category: 'Education'
    },
    {
        id: 4,
        category: 'Others'
    }
  ]

const Editor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState(''); 
  const [formData, setFormData] = useState([]);

  const [post, setPost] = useState({
    title: '',
    shortdesc: '',
    content: ''
  });

  const fieldChanged = (event) => {
    setPost({...post,[event.target.name]:event.target.value})
  }

  const contentFieldChanged = (data) => {
    setPost({...post,'content':data})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = post;
    setFormData([...formData, newFormData]);
    // setPost();
  };

  return (
    <div>
        <Navbarblog />
        <form className='form-parent'>
            <h3>Post Title:</h3>
            <div class="posttitle-box">
                <input type="text" 
                className='posttitle-core' 
                id='title' 
                onChange={fieldChanged} 
                name='title' required/>
            </div>
            <h3>Short Description:</h3>
            <div class="shortdesc-box">
                <input type="text" 
                className='shortdesc-core' 
                id='shortdesc' 
                onChange={fieldChanged} 
                name='shortdesc' required/>
            </div>
            <h3>Content:</h3>
            <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={contentFieldChanged}
                />
                {JSON.stringify(post)}
            <h3>Category:</h3>
            <div class="category-box">
                <select
                    className='category-core'
                    id='category'
                    onChange={fieldChanged}
                    name='category'
                    required
                    >
                    {data.map(({ id, category }) => (
                    <option key={id} value={id}>
                        {category}
                    </option>
                    ))}
                </select>
            </div>
            <div className='btn-box'>
                <button className='btn-save' onClick={handleSubmit}>Save Post</button>
            </div>
        </form>
        <ul>
        {formData.map((data) => (
          <li key={data.title}>
            {data.title} - {data.shortdesc}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Editor