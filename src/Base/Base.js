import React from 'react';

function Base ({heading,description,children}){
    return(
        <div className="main-cpmponent">
            <header className='head-div'>
                <h1>{heading}</h1>
                </header>
            <main >
                <h2 className='description-div'>{description}</h2>
                <div className='children-segment'> 
               {children}
                </div>

            </main>
        </div>
    )
    }
export default Base;