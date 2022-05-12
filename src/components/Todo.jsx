import { FiEdit, FiSave, FiTrash2 } from "react-icons/fi";
import React, { useState } from "react";
import { colors, sizes } from "../constants/styles";

import Checkbox from "./Checkbox";
import IconButton from "./IconButton";
import Input from "./Input";
import { ROUTES } from '../constants/routes';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  min-height: 80px;
  border-bottom: 1px solid ${colors.dark};
`;

const Todo = ({ todo, handleDelete, handleToggleCompleted, handleEdit }) => {
  const navigate = useNavigate();
  const { id, name } = todo;
  const [checked, setChecked] = useState(todo.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleClick = (id) => {
    handleDelete(id);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
    handleToggleCompleted(id);
  };

  const handleSave = () => {
    setIsEditing(false);
    handleEdit(id, newName);
  };

  return (
    <ListItem as="li">
      {isEditing ? (
        <>
          <Input
            showBorder={true}
            value={newName}
            handleChange={(e) => setNewName(e.target.value)}
            name="todo"
          />
          <IconButton
            color={colors.succes}
            size="2rem"
            icon={<FiSave />}
            margin={`0 0 0 ${sizes.sm}`}
            handleClick={() => handleSave()}
          >
            Save todo
          </IconButton>
        </>
      ) : (
        <>
          <Checkbox
            label={name}
            checked={checked}
            handleChange={handleChange}
            type="checkbox"
          />

          <div>
            <IconButton
              color={colors.gray}
              icon={<FiEdit />}
              handleClick={() => setIsEditing(true)}
            >
              Edit todo
            </IconButton>

            <IconButton
              color={colors.danger}
              icon={<FiTrash2 />}
              handleClick={() => handleClick(id)}
            >
              Delete todo
            </IconButton>
          </div>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
