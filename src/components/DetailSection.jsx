import React from 'react'
import DetailCard from './DetailCard';


const DetailSection = ({ detail }) => {
  console.log(detail)
    return (
        <div>
            <div>
               
                    <DetailCard
                  
                     detail={detail}
                    />
                
            </div>
        </div>
    );
};

export default DetailSection