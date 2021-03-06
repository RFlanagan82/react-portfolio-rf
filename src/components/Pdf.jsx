import React from 'react';
import PDF from "./resume2021.pdf";

function Pdf() {
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <embed
            style={{display:"inline"}}
            iframe src={PDF + "#toolbar=0"}
            type="application/pdf"
            height={900}
            width={600}
        />
      </div>
    );
}

export default Pdf;
