import React from 'react'
import '../styles/table.css'



export default function Table() {
    return (
        <div>
        <div class='recordTable'>
            <div class="divTable blueTable">
                <div class="divTableHeading">
                    <div class="divTableRow">
                        <div class="divTableHead">Distance</div>
                        <div class="divTableHead">Record</div>
                        <div class="divTableHead">Holder</div>
                        <div class="divTableHead">Place</div>
                        <div class="divTableHead">Year</div>
                    </div>
                </div>
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_1</div>
                        <div class="divTableCell">cell2_1</div>
                        <div class="divTableCell">cell3_1</div>
                        <div class="divTableCell">cell4_1</div>
                        <div class="divTableCell">cell5_1</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_2</div>
                        <div class="divTableCell">cell2_2</div>
                        <div class="divTableCell">cell3_2</div>
                        <div class="divTableCell">cell4_2</div>
                        <div class="divTableCell">cell5_2</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_3</div>
                        <div class="divTableCell">cell2_3</div>
                        <div class="divTableCell">cell3_3</div>
                        <div class="divTableCell">cell4_3</div>
                        <div class="divTableCell">cell5_3</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableCell">cell1_4</div>
                        <div class="divTableCell">cell2_4</div>
                        <div class="divTableCell">cell3_4</div>
                        <div class="divTableCell">cell4_4</div>
                        <div class="divTableCell">cell5_4</div>
                    </div>
                </div>
            </div>
            <div class="blueTable outerTableFooter">
                <div class="tableFootStyle">
                    <div class="links"><a href="#">USARS</a> <a href="#">USRSS</a></div>
                    {/* <a class="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a> */}
                </div> 
            </div>
        </div>
        </div>
    )
}

// Rich Black 071013
// Antique Ruby 8B2635
// Ghost White E8EBF7
// jasmine FADF7F
// Cornflower Blue 648DE5

// https://divtable.com/table-styler/#