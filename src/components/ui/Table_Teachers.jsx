import React from "react";
import styled from "styled-components";
// import FormModal from "@/components/FormModal";




export const teachersData = [
  {
    id: 1,
    teacherId: "1234567890",
    name: "John Doe",
    email: "john@doe.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["1B", "2A", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    teacherId: "1234567890",
    name: "Jane Doe",
    email: "jane@doe.com",
    photo:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics", "Chemistry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    teacherId: "1234567890",
    name: "Mike Geller",
    email: "mike@geller.com",
    photo:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    teacherId: "1234567890",
    name: "Jay French",
    email: "jay@gmail.com",
    photo:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    teacherId: "1234567890",
    name: "Jane Smith",
    email: "jane@gmail.com",
    photo:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Music", "History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    teacherId: "1234567890",
    name: "Anna Santiago",
    email: "anna@gmail.com",
    photo:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    teacherId: "1234567890",
    name: "Allen Black",
    email: "allen@black.com",
    photo:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["English", "Spanish"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    teacherId: "1234567890",
    name: "Ophelia Castro",
    email: "ophelia@castro.com",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    teacherId: "1234567890",
    name: "Derek Briggs",
    email: "derek@briggs.com",
    photo:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Literature", "English"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    teacherId: "1234567890",
    name: "John Glover",
    email: "john@glover.com",
    photo:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Anytown, USA",
  },
];



// Define styled-components
const Container = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.375rem; /* rounded-md */
  flex: 1;
  margin: 1rem; /* m-4 */
  margin-top: 0; /* mt-0 */
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: none;
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */

  @media (min-width: 768px) {
    display: block;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* gap-4 */

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  width: 2rem; /* w-8 */
  height: 2rem; /* h-8 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f0c35c; /* bg-lamaYellow */
`;

const TableContainer = styled.div`
  margin-top: 1rem; /* mt-0 */
  overflow-x: auto; /* Para el desbordamiento horizontal en pantallas pequeñas */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f1f5f9; /* Color de fondo para el encabezado */
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb; /* border-gray-200 */
  background-color: #f9fafb; /* even:bg-slate-50 */
  font-size: 0.875rem; /* text-sm */
  &:hover {
    background-color: #d6d3f0; /* hover:bg-lamaPurpleLight */
  }
`;

const TableHeader = styled.th`
  padding: 1rem; /* p-4 */
  text-align: left;
`;

const TableData = styled.td`
  padding: 1rem; /* p-4 */
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
`;
const PaginationContainer = styled.div`
  padding: 1rem; /* p-4 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6b7280; /* text-gray-500 */
`;

const Buttoun = styled.button`
  padding: 0.5rem 1rem; /* py-2 px-4 */
  border-radius: 0.375rem; /* rounded-md */
  background-color: #e2e8f0; /* bg-slate-200 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const PageNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
  font-size: 0.875rem; /* text-sm */
`;

const PageButton = styled.button`
  padding: 0 0.5rem; /* px-2 */
  border-radius: 0.125rem; /* rounded-sm */
  background-color: ${(props) => (props.active ? "#80d8ff" : "transparent")}; /* bg-lamaSky */
`;
const TeacherListPage = () => {
  const renderRow = (item) => (
    <TableRow key={item.id}>
      <TableData>
        <div>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </div>
      </TableData>
      <TableData>{item.teacherId}</TableData>
      <TableData>{item.subjects.join(",")}</TableData>
      <TableData>{item.classes.join(",")}</TableData>
      <TableData>{item.phone}</TableData>
      <TableData>{item.address}</TableData>
      <TableData>
        <ActionsContainer>
          <Button>
            {/* Aquí podrías añadir un ícono en lugar de la imagen si lo deseas */}
          </Button>
          {/* <FormModal table="teacher" type="delete" id={item.id} /> */}
        </ActionsContainer>
      </TableData>
    </TableRow>
  );

  return (
    <Container>
      <TopSection>
        <Title>All Teachers</Title>
        <ButtonGroup>
          <Button>
            {/* Icono de filtro */}
          </Button>
          <Button>
            {/* Icono de ordenación */}
          </Button>
          {/* <FormModal table="teacher" type="create" /> */}
        </ButtonGroup>
      </TopSection>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {["Info", "Teacher ID", "Subjects", "Classes", "Phone", "Address", "Actions"].map(header => (
                <TableHeader key={header}>{header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <tbody>
            {teachersData.map(renderRow)}
          </tbody>
          <PaginationContainer>
      <Buttoun disabled>Prev</Buttoun>
      <PageNumbers>
        <PageButton active>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        ...
        <PageButton>10</PageButton>
      </PageNumbers>
      <Buttoun>Next</Buttoun>
    </PaginationContainer>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TeacherListPage;
