import React from 'react';

function ItemReport(props) {
    return (
        <div>
            <div className='container'>
                <p className='text-start  a2 mt-1 '>Items Report</p>
                <p className='a3 text-start  '>Home / <span className='a26' >Items Report</span></p >

                <div className='mkl'>
                    <p className='oppo'> Filters</p>

                    <div className='d-flex mt-3'>
                        <select name="language" id="language" className='s8 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected >Select Months
                            </option>
                        </select>
                        <select name="language" id="language" className='s4 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected>Select Year</option>
                        </select>
                        <select name="language" id="language" className='s4 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected>By Order No</option>
                        </select>
                        <select name="language" id="language" className='s4 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected>Select product</option>
                        </select>
                        <select name="language" id="language" className='s4 text-secondary'>
                            <option value="javascript">1</option>
                            <option value="python">2</option>
                            <option value="c++" >3</option>
                            <option value="java" selected>Select Customer</option>
                        </select>
                        <button type="button" className="btn btn- s7 text-white">Submit</button>
                        <button type="button" className="btn btn-  s6 text-white">Clear</button>
                    </div>

                    <div className='container'>
                        <table className='mt-5 table'>
                            <tr className='s11 '>
                                <th >Order No</th>
                                <th >Items Name</th>
                                <th >Items Price</th>
                                <th >Item Subtotal Price</th>
                                <th >Items Qty</th>
                                <th >Items Discount Price</th>
                                <th >Items Tax</th>
                                <th >Total price</th>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Mark </td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$908</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154R-D456746</td>
                                <td>Marque</td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$546</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Cabinets</td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$1294</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Cabinets Pulls</td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$129</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Door Frame</td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$173</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Hardware</td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$243</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>wood door</td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$193</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td> johny</td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$4293</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>Down Ceiling</td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$2393</td>
                            </tr>
                            <tr className='s12 text-secondary'>
                                <td >154-D456746</td>
                                <td>wodden Table</td>
                                <td>...</td>
                                <td>---</td>
                                <td>...</td>
                                <td>---</td>
                                <td>---</td>
                                <td>$1293</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <br /> <br />
            </div>
            <div className='hr_line'></div>
            <p className='p11 text-center mt-2'> Copyright <span className='p12'>Demeter Fragrances.</span> All Rights Reserved</p>
        </div>
    );
}

export default ItemReport;