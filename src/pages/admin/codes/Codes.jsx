import React, { useState } from 'react'
import './codes.scss'
import { IoMdSettings } from 'react-icons/io'
import { VscDebugRestart } from 'react-icons/vsc'
import { FiSearch } from 'react-icons/fi'

const Codes = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('codes')

  const codesData = [
    { index: 12191, value: 'VLMEAA-5183', gift: 'Iphone 15Pro', usedBy: 'Шахриёр Хакимов', usedAt: '2023-11-08 18:38:33' },
    { index: 68093, value: 'VLDPSZ-2151', gift: '-', usedBy: 'Шахриёр Хакимов', usedAt: '2023-11-08 18:38:04' },
    { index: 12192, value: 'VLRLOR-9004', gift: '-', usedBy: 'Шахриёр Хакимов', usedAt: '2023-11-08 18:37:36' },
    { index: 68092, value: 'VLWGEQ-1086', gift: '-', usedBy: 'Шахриёр Хакимов', usedAt: '2023-11-08 18:36:58' },
    { index: 68095, value: 'VLVNWL-1151', gift: '-', usedBy: 'Шахриёр Хакимов', usedAt: '2023-11-08 18:36:35' },
    { index: 68094, value: 'VLCHEM-4139', gift: '-', usedBy: 'Шахриёр Хакимов', usedAt: '2023-11-08 18:36:04' },
    { index: 38726, value: 'VLRVND-9712', gift: 'Macebook', usedBy: 'Шахриёр Хакимов', usedAt: '2023-11-08 18:35:40' },
    { index: 55787, value: 'VLGGDT-7968', gift: '-', usedBy: 'Шахриёр Хакимов', usedAt: '2023-11-08 18:34:37' },
    { index: 38727, value: 'VLFGAP-0424', gift: '-', usedBy: 'Шахриёр Хакимов', usedAt: '2023-11-08 18:34:00' },
  ]

  const filteredData = codesData.filter(item =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.usedBy.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='codes'>
      <div className='codes__controls'>
        <div className='codes__controls__search'>
          <span className='codes__controls__search-icon'><FiSearch /></span>
          <input
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='codes__controls__actions'>
          <select className='codes__controls__select'>
            <option>All data</option>
            <option>Iphone 15Pro</option>
            <option>Macebook</option>
          </select>
          <button className='codes__controls__btn codes__controls__btn--download'><VscDebugRestart /></button>
          <button className='codes__controls__btn codes__controls__btn--add'><IoMdSettings /></button>
        </div>
      </div>

      <div className='codes__table-wrapper'>
        <table className='codes__table'>
          <thead>
            <tr>
              <th>Index</th>
              <th>Value</th>
              <th>Gift</th>
              <th>Used by</th>
              <th>Used at</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.index}</td>
                <td className='code-value'>{item.value}</td>
                <td>{item.gift}</td>
                <td>
                  <span className='user-badge'>{item.usedBy}</span>
                </td>
                <td className='date'>{item.usedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Codes