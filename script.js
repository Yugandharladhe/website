console.log("Hello")

function waitAndFetch() {
    let valueFetched = [];
    fetch("http://localhost:5000/api").then(res => {
        return res.json()
    }).then(res => {
        console.log({ res })
        valueFetched = [...res.data];
        let foundVal = document.getElementById("tblbdy");
        foundVal.innerHTML = valueFetched.map((val, index) => {
            let newCHange = val.sell - val.buy 
            return `
            <tr class="table-row">
                <th>
                    <h4>
                        <span class="table-row-content">${index + 1}</span>
                    </h4>
                </th>
                <th>
                    <h4>
                        <span class="table-row-content">
                            <a href="/#${val._id}">
                                <!-- ! Icon Here Maybe? -->
                                ${val.base_unit}
                            </a>
                        </span>
                    </h4>
                </th>
                <th>
                    <h4>
                        <span class="table-row-content">₹ ${val.last}</span>
                    </h4>
                </th>
                <th>
                    <h4>
                        <span class="table-row-content">₹ ${val.buy} / ₹ ${val.sell}</span>
                    </h4>
                </th>
                <th>
                    <h4>
                        <span class="table-row-content" data-isRed="${val.volume < 0}"
                        >${val.volume} %</span
                        >
                    </h4>
                </th>
                <th>
                    <h4>
                        <span class="table-row-content" data-isRed="${newCHange < 0}"
                        >${newCHange > 0 ? '▲' : '▼'} ₹ ${Math.abs(newCHange)}</span
                        >
                    </h4>
                </th>
            </tr>
        `;
        }).join('');
    });

    // let valueFetched = [];
    // fetch("http://localhost:5000/api").then(res=>{
    //     return res.json()
    // }).then(res=>{
    //     console.log({res})
    //     valueFetched = [...res.data];
    //     let foundVal = document.getElementById("tblbdy")
    //     valueFetched.map(val=>{
    //         foundVal.v
    //     })
    //     /*
    //     <tr class="table-row">
    //             <th>
    //               <h4>
    //                 <span class="table-row-content">2</span>
    //               </h4>
    //             </th>
    //             <th>
    //               <h4>
    //                 <span class="table-row-content">
    //                   <a href="/#id">
    //                     <!-- ! Icon Here Maybe? -->
    //                     Bitbns
    //                   </a>
    //                 </span>
    //               </h4>
    //             </th>
    //             <th>
    //               <h4>
    //                 <span class="table-row-content">₹ 28,29,196</span>
    //               </h4>
    //             </th>
    //             <th>
    //               <h4>
    //                 <span class="table-row-content"
    //                   >₹ 27,83,564 / ₹ 28,19,415</span
    //                 >
    //               </h4>
    //             </th>
    //             <th>
    //               <h4>
    //                 <span class="table-row-content" data-isRed="false"
    //                   >15.84 %</span
    //                 >
    //               </h4>
    //             </th>
    //             <th>
    //               <h4>
    //                 <span class="table-row-content" data-isRed="false"
    //                   >▲ ₹ 3,86,778</span
    //                 >
    //               </h4>
    //             </th>
    //           </tr>
    //     */

    // });
}
waitAndFetch()