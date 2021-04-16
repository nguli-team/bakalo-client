import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className='cards roboto'>
            <h1>Popular Threads</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul role="list" className='cards__items grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4'>
                        <div className="block overflow-hidden w-full">
                            <CardItem
                                src={require('../assets/img-9.jpg').default}
                                thread='Traveling'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                label='Sains'
                                path='/sains/'
                            />
                        </div>
                        <div className="block overflow-hidden w-full">
                            <CardItem
                                src={require('../assets/img-2.jpg').default}
                                thread='Samoa Island'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                label='Sains'
                                path='/sains/'
                            />
                        </div>
                        <div className="block overflow-hidden w-full">
                            <CardItem
                                src={require('../assets/img-9.jpg').default}
                                thread='Traveling'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                label='Sains'
                                path='/sains/'
                            />
                        </div>
                        <div className="block overflow-hidden w-full">
                            <CardItem
                                src={require('../assets/img-2.jpg').default}
                                thread='Samoa Island'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                label='Sains'
                                path='/sains/'
                            />
                        </div>
                    </ul>
                </div>
            </div>
            <Link to="/"><h3>Buy us a coffee and get exclusive rewards</h3></Link>
            <h4>Copyright © 2021 Baka Project All rights reserved.</h4>
        </div>
    );
}

export default Cards