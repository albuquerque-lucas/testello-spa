import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { uploadFreightCsv } from '../../lib/api/freightTableAPI';

interface CsvFormModalProps {
  show: boolean;
  handleClose: () => void;
}

const CsvFormModal: React.FC<CsvFormModalProps> = ({ show, handleClose }) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (files) {
      const result = await uploadFreightCsv(files);
      if (result) {
        console.log('Result', result);
        handleClose();
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Upload CSV</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Selecione os arquivos CSV para upload:</Form.Label>
            <Form.Control type="file" name="csv_file" accept=".csv" multiple onChange={handleFileChange} />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Enviar
          </Button>
        </Form>
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
