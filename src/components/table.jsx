import React, { useEffect, useState } from 'react';

import { FaPencil, FaPlus } from 'react-icons/fa6';
import DemoComponent from './datecomponent';

export default function TableExample(props) {
  useEffect(() => {}, []);
  return (
    <table class='w-full text-sm text-center rounded-xl overflow-hidden '>
      <thead class='text-xs bg-green-700 text-white uppercase 0'>
        <tr>
          <th scope='col' class='px-6 py-3'>
            Section
          </th>
          <th scope='col' class='px-6 py-3'>
            PO. No.
          </th>
          <th scope='col' class='px-6 py-3'>
            Description
          </th>
          <th scope='col' class='px-6 py-3'>
            Vendor Name
          </th>
          <th scope='col' class='px-6 py-3'>
            Contract Start Date
          </th>
          <th scope='col' class='px-6 py-3'>
            Contract End Date
          </th>
          <th scope='col' class='px-6 py-3'>
            COFF START DATE
          </th>
          <th scope='col' class='px-6 py-3'>
            COFF END DATE
          </th>{' '}
          <th scope='col' class='px-6 py-3'>
            Edit
          </th>
        </tr>
      </thead>
      <tbody className='bg-gray-100'>
        <tr class=' border-b text-center'>
          <td class='px-6 py-4'>PNI</td>
          <th scope='row' class='px-6 py-4 font-medium  whitespace-nowrap '>
            5000018937
          </th>

          <td class='px-6 py-4'>Internet Bandwidth Services - Primary Link</td>
          <td class='px-6 py-4'>WATEEN TELECOM LIMITED</td>
          <td class='px-6 py-4'>1-Nov-20</td>
          <td class='px-6 py-4'>31-Oct-23</td>
          <td class='px-6 py-4'>1-Jan-23</td>
          <td class='px-6 py-4'>30-Jun-23</td>

          <td class='px-6 py-4'>
            <a
              href='#'
              class='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              <FaPencil className='mx-auto' />
            </a>
          </td>
        </tr>
        <tr class='bg-white border-b text-center'>
          <td class='px-6 py-4'>
            <input
              type='text'
              id=''
              class=' border mx-auto text-gray-900 text-sm rounded-lg block w-24 text-center p-2.5'
              placeholder='Section'
              required
            />
          </td>
          <th scope='row' class='px-6 py-4 font-medium  whitespace-nowrap '>
            <input
              type='text'
              id=''
              class=' border mx-auto text-gray-900 text-sm rounded-lg block w-42 text-center p-2.5'
              placeholder='Contract Number'
              required
            />
          </th>

          <td class='px-6 py-4'>
            {' '}
            <input
              type='text'
              id=''
              class=' border mx-auto text-gray-900 text-sm rounded-lg block w-80 text-center p-2.5'
              placeholder='Description'
              required
            />
          </td>
          <td class='px-6 py-4'>
            <input
              type='text'
              id=''
              class=' border mx-auto text-gray-900 text-sm rounded-lg block w-64 text-center p-2.5'
              placeholder='Vendor Name'
              required
            />
          </td>
          <td class='px-6 py-4'>
            <input
              type='text'
              id=''
              class=' border mx-auto text-gray-900 text-sm rounded-lg block w-32 text-center p-2.5'
              placeholder='Contract Start'
              required
            />
          </td>
          <td class='px-6 py-4'>
            <input
              type='text'
              id=''
              class=' border mx-auto text-gray-900 text-sm rounded-lg block w-32 text-center p-2.5'
              placeholder='Contract End'
              required
            />
          </td>
          <td class='px-6 py-4'>
            <input
              type='text'
              id=''
              class=' border mx-auto text-gray-900 text-sm rounded-lg block w-32 text-center p-2.5'
              placeholder='Call Off Start'
              required
            />
          </td>
          <td class='px-6 py-4'>
            <input
              type='text'
              id=''
              class=' border mx-auto text-gray-900 text-sm rounded-lg block w-32 text-center p-2.5'
              placeholder='Call Off End'
              required
            />
          </td>

          <td class='px-6 py-4'>
            <a
              href='#'
              class='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              <FaPlus className='mx-auto text-green-800 font-bold text-xl' />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
