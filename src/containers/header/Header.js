import React from 'react';
import './Header..css';
import people from '../../assets/people.png';

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde officiis ad animi quod, voluptatum magni commodi itaque natus consectetur earum distinctio ab. Praesentium ipsa architecto non suscipit autem? Minima, ullam! Mollitia soluta nesciunt ullam consequuntur.</p>


                <div className="gpt3__header-content__input">
                    <input type="email" name="" id="" placeholder='Your email address' />
                    <button type='button'>Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt='people' />
                </div>
            </div>
        </div>
    );
};

export default Header;