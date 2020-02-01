import React from 'react';
import styled from 'styled-components';

const Label = styled.div `
width: 100%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
margin-top: 6px;
margin-bottom: 16px;
resize: vertical;
`

const Contactform = () => (

    <div> 
        <h2>{`Contact Agent`}</h2>
          <form>
              <Label>
        <label>
         Phone:
        
        </label>
        </Label>

        <Label>
        <label>
          Email:
       
        </label>
        </Label>
        <input  placeholder="I am interested in 355 Bryant St UNIT 309, San Francisco, CA 94107." style={{height:"70px" ,width:"100%"}} />

        <input type ="submit" value = "Send" />
      </form>

    </div>
)

export default Contactform;