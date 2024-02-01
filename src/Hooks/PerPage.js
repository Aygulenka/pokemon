import React, { useState, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import './perPage.css'
let index = 0;

const PerPage = () => {
  const [items, setItems] = useState(['jack', 'lucy']);
  const [card, setCard] = useState('');
  const inputRef = useRef(null);
  const onCardChange = (event) => {
    setCard(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, card || `New item ${index++}`]);
    setCard('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  return (
    <Select
      style={{
        width: 150,
        height:50,
      }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: '8px 0',
            }}
          />
          <Space
            style={{
              padding: '0 8px 4px',
            }}
          >
            <Input
              placeholder="Please enter item"
              ref={inputRef}
              value={card}
              onChange={onCardChange}
              onKeyDown={(e) => e.stopPropagation()}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
          </Space>
        </>
      )}
      options={items.map((item) => ({
        label: item,
        value: item,
      }))}
    />
  );
};
export default PerPage;