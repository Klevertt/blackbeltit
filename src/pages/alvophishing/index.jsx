import React, { useState } from 'react';
import { Search, Edit2, Trash2, Plus } from 'lucide-react';
import {
  Container,
  SearchSection,
  SearchContainer,
  SearchInput,
  Table,
  TableHeader,
  TableRow,
  ActionButton,
  AddButton,
  Modal,
  Overlay,
  Form,
  Input,
  ButtonGroup,
  Button,
  Label,
} from './styled';

const Alvos = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      company: 'Jujutsu highschool',
      email: 'nahidwin@gmail.com',
      name: 'Gojo Satoru',
      role: 'O mais forte',
    },
    {
      id: 2,
      company: 'SCP Foundation',
      email: 'sla@gmail.com',
      name: 'Jane Smith',
      role: 'SCP Catalog',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const handleAdd = () => {
    setCurrentEmployee(null);
    setModalOpen(true);
  };

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const employeeData = {
      id: currentEmployee?.id || Date.now(),
      company: formData.get('company'),
      email: formData.get('email'),
      name: formData.get('name'),
      role: formData.get('role'),
    };

    if (currentEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === currentEmployee.id ? employeeData : emp
        )
      );
    } else {
      setEmployees([...employees, employeeData]);
    }

    setModalOpen(false);
  };

  const filteredEmployees = employees.filter((emp) =>
    Object.values(emp).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Container>
      <SearchSection>
        <SearchContainer>
          <Search size={20} color="#fff" />
          <SearchInput
            type="text"
            placeholder="Procurar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        <AddButton onClick={handleAdd}>
          <Plus size={20} />
          Adicionar empregado
        </AddButton>
      </SearchSection>
      <TableHeader>Gerenciamento da empresa</TableHeader>
      <Table>
        <TableHeader>
          <div>Empresa</div>
          <div>Email</div>
          <div>Nome</div>
          <div>Cargo</div>
          <div>Ações</div>
        </TableHeader>
        {filteredEmployees.map((employee) => (
          <TableRow key={employee.id}>
            <div>
              <Label>Empresa:</Label>
              {employee.company}
            </div>
            <div>
              <Label>Email:</Label>
              {employee.email}
            </div>
            <div>
              <Label>Nome:</Label>
              {employee.name}
            </div>
            <div>
              <Label>Cargo:</Label>
              {employee.role}
            </div>
            <div className="flex gap-2">
              <ActionButton onClick={() => handleEdit(employee)}>
                <Edit2 size={20} />
              </ActionButton>
              <ActionButton delete onClick={() => handleDelete(employee.id)}>
                <Trash2 size={20} />
              </ActionButton>
            </div>
          </TableRow>
        ))}
      </Table>
      {modalOpen && (
        <>
          <Overlay onClick={() => setModalOpen(false)} />
          <Modal>
            <Form onSubmit={handleSubmit}>
              <Input
                name="company"
                placeholder="Empresa"
                defaultValue={currentEmployee?.company}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                defaultValue={currentEmployee?.email}
                required
              />
              <Input
                name="name"
                placeholder="Nome"
                defaultValue={currentEmployee?.name}
                required
              />
              <Input
                name="role"
                placeholder="Cargo"
                defaultValue={currentEmployee?.role}
                required
              />
              <ButtonGroup>
                <Button type="button" onClick={() => setModalOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" primary>
                  {currentEmployee ? 'Update' : 'Add'} Funcionário
                </Button>
              </ButtonGroup>
            </Form>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default Alvos;
