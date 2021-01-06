import React from "react";

const ResultList = ({permutations, filter}) => {


return <div>
    {permutations.map(permutation => <p>{permutation}</p>)}
</div>


}

export default ResultList;