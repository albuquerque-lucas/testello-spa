import React, { useState } from 'react';
import { IoMdWarning } from "react-icons/io";
import { Modal, Button, Form } from 'react-bootstrap';

interface DeleteAllModalProps {
  show: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const DeleteAllModal: React.FC<DeleteAllModalProps> = ({ show, handleClose, handleDelete }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton className="bg-warning text-dark text-center">
        <Modal.Title className='d-flex align-items-center'>
          <IoMdWarning className="me-2" />
          Atenção
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Você está prestes a deletar todos os itens. Esta ação não pode ser desfeita.</p>
        <p>Por favor, digite "Pode deletar" no campo abaixo para confirmar.</p>
        <Form.Group controlId="deleteConfirmationInput" className="mb-3">
          <Form.Label>Confirmação:</Form.Label>
          <Form.Control
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Digite 'Pode deletar'"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={ handleDelete }
          disabled={inputValue !== 'Pode deletar'}
        >
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAllModal;
