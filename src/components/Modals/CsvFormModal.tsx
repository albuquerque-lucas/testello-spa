import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface CsvFormModalProps {
  show: boolean;
  handleClose: () => void;
}

const CsvFormModal: React.FC<CsvFormModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload CSV</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form encType="multipart/form-data" action="/sua-rota-especifica" method="POST">
          <input type="file" name="files" accept=".csv" multiple />
          <Button type="submit" className="mt-3">Enviar</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CsvFormModal;
