import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

function Comparison(props) {
    return (
        <div className=''>
            <div className='container'>
                <p className='text-start  a2 mt-1 '>Comparison Report</p>
                <p className='a3 text-start  '>Home / <span className='text-secondary' >Comparison Report</span></p >

                <div className='row x1 mt-3 c2' >
                    <div className='col-lg-5'>
                        <table class="table table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>
                                        <select name="language" id="language" className='s4 text-secondary'>
                                            <option value="javascript">1</option>
                                            <option value="python">2</option>
                                            <option value="c++" >3</option>
                                            <option value="java" selected>2023</option>
                                        </select>
                                    </th>
                                    <th>Month</th>
                                    <th>
                                        <select name="language" id="language" className='s4 text-secondary'>
                                            <option value="javascript">1</option>
                                            <option value="python">2</option>
                                            <option value="c++" >3</option>
                                            <option value="java" selected>July  </option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td className='s12 text-secondary'>Total Bookings:</td>
                                    <td></td>
                                    <td>john</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Sale Product:</td>
                                    <td></td>
                                    <td>johnsddas</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Subtotal:</td>
                                    <td></td>
                                    <td>josdhnsa</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Tax:</td>
                                    <td></td>
                                    <td>winni</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Shipping:</td>
                                    <td></td>
                                    <td>wagstaff</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Discounts</td>
                                    <td></td>
                                    <td>robdsa</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Sale Price/Revenue:</td>
                                    <td></td>
                                    <td>jnhcdda</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Customers:</td>
                                    <td></td>
                                    <td>john</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Customer addon:</td>
                                    <td></td>
                                    <td>john</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Most Purchased sale Product:</td>
                                    <td></td>
                                    <td>kjdfhs</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Most Higher price sale product:</td>
                                    <td></td>
                                    <td>hjbsbd</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Most Lowest price sale Product:</td>
                                    <td></td>
                                    <td>john</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className='col-lg-2'>
                        <div className=' ccf  '>
                            <div className='ccf4 '>
                                <HiOutlineArrowNarrowRight className='ccf2 mt-4' />
                                <HiOutlineArrowNarrowLeft className='d-block ccf2' />
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-5'>
                        <table class="table table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>
                                        <select name="language" id="language" className='s4 text-secondary'>
                                            <option value="javascript">1</option>
                                            <option value="python">2</option>
                                            <option value="c++" >3</option>
                                            <option value="java" selected>2023</option>
                                        </select>
                                    </th>
                                    <th>Month</th>
                                    <th>
                                        <select name="language" id="language" className='s4 text-secondary'>
                                            <option value="javascript">1</option>
                                            <option value="python">2</option>
                                            <option value="c++" >3</option>
                                            <option value="java" selected>August</option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td className='s12 text-secondary'>Total Bookings:</td>
                                    <td></td>
                                    <td>john</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Sale Product:</td>
                                    <td></td>
                                    <td>johnsddas</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Subtotal:</td>
                                    <td></td>
                                    <td>josdhnsa</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Tax:</td>
                                    <td></td>
                                    <td>winni</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Shipping:</td>
                                    <td></td>
                                    <td>wagstaff</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Discounts</td>
                                    <td></td>
                                    <td>robdsa</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Sale/Revenue:</td>
                                    <td></td>
                                    <td>jnhcdda</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Customers:</td>
                                    <td></td>
                                    <td>john</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Total Customer addon:</td>
                                    <td></td>
                                    <td>john</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'>Sale Purchased Product:</td>
                                    <td></td>
                                    <td>kjdfhs</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'> Higher sale product:</td>
                                    <td></td>
                                    <td>hjbsbd</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='s12 text-secondary'> Lowest sale Product:</td>
                                    <td></td>
                                    <td>john</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className=' cc3'></div>
                    <ul className="pagination justify-content-end mt-4">
                        <li className="page-item ">
                            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item"><a class="page-link" href="#">2</a></li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div>
                <br />
            </div>
            <p className='p11 text-center mt-2'> Copyright <span className='p12'>Demeter Fragrances.</span> All Rights Reserved</p>
        </div>
    );
}

export default Comparison;