import React from 'react'
import loading from './spinner2.gif'
export const Spinner =()=> {

        return(
            <div className='text-center'>
                <img src={loading} style={{width: "5rem"}} alt="loading"/>
            </div>
        )
}
