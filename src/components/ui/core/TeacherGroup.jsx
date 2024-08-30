// Importa styled-components
import styled from 'styled-components';
// import user from "../public/img/user.png";

// Define los componentes estilizados
const Card = styled.div`
width:100%;
height:100%;
  background:var(--bacgroundContent);
  box-shadow: var(--boxShadowCont);
  border-radius:0.4em;
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid var(--borderColorHr);
`;

const CardTitle = styled.h3`
  margin: 0;
  color:#fff;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CardDescription = styled.p`
  margin: 0;
  color: #bec2ca;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Avatar = styled.div`
  border: 2px solid #d1d5db;
  border-radius: 9999px;
  width: 48px;
  height: 48px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events:none;
`;

// Componente Teacher
export default function TeacherCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profesor</CardTitle>
        <CardDescription>Profesor responsable del <b style={{ color:'#fff'}}>10B</b></CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Avatar>
            <AvatarImage src="../public/img/user.png"  alt="Teacher" />
          </Avatar>
          <div>
            <div style={{ fontWeight: '600', color:'#fff' }}>John Doe</div>
            <div style={{ color: '#bec2ca' }}>Mathematics, Science</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
